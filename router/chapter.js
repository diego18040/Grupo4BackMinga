import { Router } from "express";
import { allChapters, chaptersByMangaId, chaptersById } from "../controllers/chapter/read.js";
import { create } from "../controllers/chapter/create.js";




const router = Router();


router.get("/all", allChapters)
router.get("/manga/:id", chaptersByMangaId)
router.get("/id/:id", chaptersById)
router.post("/create", create)





export default router;