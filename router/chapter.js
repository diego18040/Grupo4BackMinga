import { Router } from "express";
import { allChapters, chaptersByMangaId, chaptersById } from "../controllers/chapter/read.js";
import { create } from "../controllers/chapter/create.js";
import { deleteOne } from "../controllers/chapter/delete.js";
import { update } from "../controllers/chapter/update.js";




const router = Router();


router.get("/all", allChapters)
router.get("/manga/:id", chaptersByMangaId)
router.get("/id/:id", chaptersById)
router.post("/create", create)
router.put("/update", update)
router.delete("/deleteOne/:id", deleteOne)





export default router;