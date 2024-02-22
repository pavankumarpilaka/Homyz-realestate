import asynchandler from 'express-async-handler'

import { prisma } from '../config/prismaconfig.js'

export const createresidency=asynchandler(async(req,res)=>{
    const {title,description,price,address,city,country,facilities,image,useremail}=req.body.data;
    console.log(req.body.data)
    try{
       const residency=await prisma.residency.create({
        data:{
            title,description,price,
            address,city,country,facilities,image,owner:{connect:{email:useremail}}
        }
       })
       res.send({message:"residency created successfully..",residency});
    }catch(err){
        if(err.code=="p2002"){
            throw new Error("a residency with adress already there");
        }
        throw new Error(err.message);
    }
})

export const allresidency=asynchandler(async(req,res)=>{
    const residencies=await prisma.residency.findMany({
        orderBy:{
            createdat:"desc",
        }
    });
    res.send(residencies);
})

export const getresidency=asynchandler(async(req,res)=>{
    const {id}=req.params;
    try{
    const resi=await prisma.residency.findUnique({
        where:{id}
    });
    res.send(resi)
   }catch(err){
    throw new Error(err.message);
   }
})