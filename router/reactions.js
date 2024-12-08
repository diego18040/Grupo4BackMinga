import { Router } from "express";
import { allReactions } from "../controllers/reactions/read.js";
import { create } from "../controllers/reactions/create.js";
import { update } from "../controllers/reactions/update.js";
import { deleteOne } from "../controllers/reactions/delete.js";
import passport from "../middleware/passport.js";

const router = Router();




router.get("/all", passport.authenticate("jwt", { session: false }), allReactions)
router.post("/create/:id", passport.authenticate("jwt", { session: false }), create)
router.put("/update", passport.authenticate("jwt", { session: false }), update)
router.delete("/deleteOne/:id", passport.authenticate("jwt", { session: false }), deleteOne)




export default router
