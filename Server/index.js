import express from "express";
import dotenv from "dotenv";
import cookieParser from "cookie-parser";
import cors from 'cors';
import { userRoute } from "./routes/userRoute.js";
import { residencyroute } from "./routes/residencyroute.js";
dotenv.config()

const app=express();

const PORT=process.env.PORT || 3000;

app.use(express.json())
app.use(cookieParser())
// Example of more restrictive CORS configuration
app.use(cors({
    origin: 'https://homyz-realestate-clientside.vercel.app',
    methods: ['GET', 'POST'],
    allowedHeaders: ['Content-Type', 'Authorization'],
}));

app.listen(PORT,()=>{
    console.log("server is running succesfully...");
})

app.use('/api/user',userRoute);
app.use('/api/residency',residencyroute);

