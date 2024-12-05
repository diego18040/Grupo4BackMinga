import { Router } from "express";
import { allMangas, MangasByCreatorId, MangasByCategoryId } from "../controllers/manga/read.js";
import { deleteOne } from "../controllers/manga/delete.js";
import { update } from "../controllers/manga/update.js";
import { create } from "../controllers/manga/create.js";


const router = Router();


router.get("/all", allMangas)
router.get("/creator/:id", MangasByCreatorId)
router.get("/category/:id", MangasByCategoryId)
router.put("/update", update)
router.delete("/deleteOne/:id", deleteOne)
router.post("/create", create)




export default router


