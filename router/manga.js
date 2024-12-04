import { Router } from "express";
import { allMangas, MangasByCreatorId, MangasByCategoryId } from "../controllers/manga/read.js";



const router = Router();


router.get("/all", allMangas)
router.get("/creator/:id", MangasByCreatorId)
router.get("/category/:id", MangasByCategoryId)




export default router


