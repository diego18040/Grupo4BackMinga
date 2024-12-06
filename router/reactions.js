import { Router } from "express";
import { allReactions } from "../controllers/reactions/read.js";
import { create } from "../controllers/reactions/create.js";
import { update } from "../controllers/reactions/update.js";
import { deleteOne } from "../controllers/reactions/delete.js";

const router = Router();




router.get("/all", allReactions)
router.post("/create", create)
router.put("/update", update)
router.delete("/deleteOne/:id", deleteOne)




export default router
