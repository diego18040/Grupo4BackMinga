import { Router } from "express";
import { allCategories } from "../controllers/category/read.js";
import {update} from "../controllers/category/update.js"


const router = Router();


router.get("/all", allCategories)
router.put("/update", update)




export default router