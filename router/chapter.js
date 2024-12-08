import { Router } from "express";
import { allChapters, chaptersByMangaId, chaptersById } from "../controllers/chapter/read.js";
import { create } from "../controllers/chapter/create.js";
import { deleteOne } from "../controllers/chapter/delete.js";
import { update } from "../controllers/chapter/update.js";
import  passport  from "../middleware/passport.js";



const router = Router();


router.get("/all", passport.authenticate("jwt", { session: false }), allChapters)
router.get("/manga/:id", passport.authenticate("jwt", { session: false }), chaptersByMangaId)
router.get("/id/:id", passport.authenticate("jwt", { session: false }), chaptersById)
router.post("/create", passport.authenticate("jwt", { session: false }), create)
router.put("/update", passport.authenticate("jwt", { session: false }), update)
router.delete("/deleteOne/:id", passport.authenticate("jwt", { session: false }), deleteOne)





export default router;