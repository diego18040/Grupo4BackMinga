import { Router } from "express";
import { allReactions } from "../controllers/reactions/read.js";
import { create } from "../controllers/reactions/create.js";
import { update } from "../controllers/reactions/update.js";
import { deleteOne } from "../controllers/reactions/delete.js";
import passport from "../middleware/passport.js";
import isRole0 from "../middleware/isRole0.js";

const router = Router();




router.get("/all", passport.authenticate("jwt", { session: false }),isRole0, allReactions)
router.post("/create", passport.authenticate("jwt", { session: false }), isRole0, create)
router.put("/update", passport.authenticate("jwt", { session: false }), isRole0, update)
router.delete("/deleteOne/:id", passport.authenticate("jwt", { session: false }), isRole0, deleteOne)




export default router
