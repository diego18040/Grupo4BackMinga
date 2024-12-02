import { Router } from "express";
import { allAuthors,getAuthorById,searchAuthorsByName } from "../controllers/author/read.js";
import { updatePhoto } from "../controllers/author/update.js";
import { create } from "../controllers/author/create.js";
import { deleteOne } from "../controllers/author/delete.js";



const router = Router();




router.get("/all", allAuthors)
router.get('/:id',getAuthorById)
router.post("/create", create)
router.put("/updatePhoto", updatePhoto)
router.delete("/deleteOne", deleteOne)





export default router