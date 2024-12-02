import { Router } from "express";
import { allChapters, chaptersByMangaId } from "../controllers/chapter/read.js";



const router = Router();


router.get("/all", allChapters)
router.get("/manga/:id", chaptersByMangaId)




export default router;