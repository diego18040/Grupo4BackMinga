import { Router } from "express";
import { allCategories } from "../controllers/category/read.js";


const router = Router();


router.get("/all", allCategories)




export default router