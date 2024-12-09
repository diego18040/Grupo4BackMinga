import { Router } from "express";
import { allComments, commentsByChapterId } from "../controllers/comments/read.js";
import { updateMessage } from "../controllers/comments/update.js";
import { deleteOne } from "../controllers/comments/delete.js";
import { create } from "../controllers/comments/create.js";
import passport from "../middleware/passport.js";

const router = Router();


router.get("/all", passport.authenticate("jwt", { session: false }), allComments)
router.get("/chapter/:id", passport.authenticate("jwt", { session: false }), commentsByChapterId)
router.put("/updateMessage/:id", passport.authenticate("jwt", { session: false }), updateMessage)
router.delete("/deleteOne/:id", passport.authenticate("jwt", { session: false }), deleteOne)
router.post("/create", passport.authenticate("jwt", { session: false }), create)





export default router