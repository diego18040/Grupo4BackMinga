import { Router } from "express";
import { allComments, commentsByChapterId } from "../controllers/comments/read.js";
import { updateMessage } from "../controllers/comments/update.js";
import { deleteOne } from "../controllers/comments/delete.js";
import { create } from "../controllers/comments/create.js";
import passport from "../middleware/passport.js";
import isRole0 from "../middleware/isRole0.js";

const router = Router();


router.get("/all", passport.authenticate("jwt", { session: false }), allComments)
router.get("/chapter/:id", passport.authenticate("jwt", { session: false }), commentsByChapterId)
router.put("/updateMessage/:id", passport.authenticate("jwt", { session: false }), isRole0, updateMessage)
router.delete("/deleteOne/:id", passport.authenticate("jwt", { session: false }), deleteOne)
router.post("/create", passport.authenticate("jwt", { session: false }), isRole0, create)





export default router