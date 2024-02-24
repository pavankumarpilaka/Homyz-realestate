import asynchandler from 'express-async-handler'

import { prisma } from '../config/prismaconfig.js'

export const createresidency = asyncHandler(async (req, res) => {
    const { title, description, price, address, city, country, facilities, image, useremail } = req.body.data;
    console.log(req.body.data); // Logging the data received from the client for debugging purposes
    try {
        const residency = await prisma.residency.create({
            data: {
                title,
                description,
                price,
                address,
                city,
                country,
                facilities,
                image,
                owner: { connect: { email: useremail } }
            }
        });
        res.send({ message: "Residency created successfully..", residency });
    } catch (err) {
        if (err.code == "P2002") { // Adjusted to "P2002" from "p2002"
            throw new Error("A residency with this address already exists."); // Fixed typo in the error message
        }
        throw new Error(err.message);
    }
});


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