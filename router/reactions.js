import { Router } from "express";
import { allReactions } from "../controllers/reactions/read.js";

const router = Router();




router.get("/all", allReactions)




export default router
