import { Router } from "express";
import { allAuthors } from "../controllers/author/read.js";



const router = Router();




router.get("/all", allAuthors)




export default router