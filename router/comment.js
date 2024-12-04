import { Router } from "express";
import { allComments } from "../controllers/comments/read.js";
import { updateMessage } from "../controllers/comments/update.js";
import { deleteOne } from "../controllers/comments/delete.js";
import { create } from "../controllers/comments/create.js";


const router = Router();


router.get("/all", allComments)
router.put("/updateMessage", updateMessage)
router.delete("/deleteOne/:id", deleteOne)
router.post("/create", create)




export default router