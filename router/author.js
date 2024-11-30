import { Router } from "express";
import { allAuthors,getAuthorById,searchAuthorsByName } from "../controllers/author/read.js";



const router = Router();




router.get("/all", allAuthors)
router.get('/:id',getAuthorById)




export default router