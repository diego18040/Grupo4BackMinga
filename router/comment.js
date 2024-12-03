import { Router } from "express";
import { allComments } from "../controllers/comments/read.js";
import { updateMessage } from "../controllers/comments/update.js";


const router = Router();


router.get("/all", allComments)
router.put("/updateMessage", updateMessage)




export default router