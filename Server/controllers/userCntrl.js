import asynchandler from 'express-async-handler'
import { prisma } from '../config/prismaconfig.js'

export const createuser = asynchandler(async (req, res) => {
    console.log("creating a user");
    let { email } = req.body;
    console.log(email);
    
    const user = await prisma.user.findUnique({ where: { email: email } });

    if (!user) {  // Fix the variable name from userexist to user
        const userdata = await prisma.user.create({ data: req.body });
        res.status(201).json({
            message: "user registered successfully",
            user: userdata,  // Correct the variable name from user to userdata
        });
    } else {
        res.status(200).json({ message: "user already registered" });  // Correct the status code from 201 to 200
    }
});

export const bookvisit=asynchandler(async(req,res)=>{
    const {email,date}=req.body;
    const {id}=req.params;
    try{
        const alreadybooked=await prisma.user.findUnique({
            where:{email},
            select:{bookedvisits:true}
        })
        if(alreadybooked.bookedvisits.some((visit)=>visit.id==id)){
            res.status(400).json({message:"This residency has been already booked by you."});
        }else{
            await prisma.user.update({
                where:{email:email},
                data:{
                    bookedvisits:{push:{id,date}}
                }
            })
            res.send("Your visit is succesfull...");
        }
        

    }catch(err){
       throw new Error(err.message);
    }
})
export const getallbook=asynchandler(async(req,res)=>{
    const {email}=req.body
    try{
      const bookings=await prisma.user.findUnique({
        where:{email},
        select:{bookedvisits:true}
      })
      res.status(200).send(bookings)
    }catch(err){
        throw new Error(err.message);
    }
})

export const cancelbook=asynchandler(async(req,res)=>{
    const {email}=req.body;
    const {id}=req.params;
    try{
        const user=await prisma.user.findUnique({
            where:{email:email},
            select:{bookedvisits:true}
        })
        const index=user.bookedvisits.findIndex((visit)=>visit.id==id);
        if(index===-1){
            res.status(404).json({message:"bookings not found"})
        }else{
            user.bookedvisits.splice(index,1);
            await prisma.user.update({
                where:{email},
                data:{
                    bookedvisits:user.bookedvisits
                }
            })
            res.send("booking cancelled sucessfulyy....");
        }
    }catch(err){
        throw new Error(err.message);
    }
})

export const tofav=asynchandler(async(req,res)=>{
      const {email}=req.body;
      const {id}=req.params;
      try{
        const user=await prisma.user.findUnique({
            where:{email}

        })
        if(user.favresidenceId.includes(id)){
            const updateduser=await prisma.user.update({
                where:{email},
                data:{
                    favresidenceId:{
                        set:user.favresidenceId.filter((id)=>id!=id)
                    }
                }
            });
            res.send({message:"removed from favorite residencies",user:updateduser})
        }else{
            const updateduser=await prisma.user.update({
                where:{email},
                data:{
                    favresidenceId:{
                        push:id
                    }
                }
            });
            res.send({message:"Added to favorite residencies",user:updateduser})

        }

      }catch(err){
        throw new Error(err.message);
      }
})

export const allfavs=asynchandler(async(req,res)=>{
    const {email}=req.body;
    try{
       const favres=await prisma.user.findUnique({
        where:{email},
        select:{favresidenceId:true},
       });
       res.status(200).send(favres);
       
    }catch(err){
        throw new Error(err.message);
    }
})
