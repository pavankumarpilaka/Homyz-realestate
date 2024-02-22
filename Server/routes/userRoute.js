import express from "express";
import { allfavs, bookvisit, cancelbook, createuser, getallbook, tofav } from "../controllers/userCntrl.js";
import jwtCheck from "../config/auth0config.js";
const router=express.Router();

router.post("/register",createuser)
router.post("/bookvisit/:id",bookvisit)
router.post("/getallbooking",getallbook)
router.post("/cancelbooking/:id",cancelbook)
router.post("/favorites/:id",tofav)
router.post("/allfavorites",allfavs)
export {router as userRoute}