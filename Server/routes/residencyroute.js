import express from "express";
import { allresidency, createresidency, getresidency } from "../controllers/residencycntrl.js";
const router=express.Router();

router.post("/create",createresidency)
router.get("/allres",allresidency)
router.get("/:id",getresidency)
export {router as residencyroute}