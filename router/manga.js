import { Router } from "express";
import { allMangas } from "../controllers/manga/read.js";



const router = Router();


router.get("/all", allMangas)




export default router


