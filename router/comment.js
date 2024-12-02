import { Router } from "express";
import { allComments } from "../controllers/comments/read.js";


const router = Router();


router.get("/all", allComments)




export default router