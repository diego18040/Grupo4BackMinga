import { Router } from "express";
import { allMangas, MangasByCreatorId, MangasByCategoryId, MangasById, FavoriteMangas } from "../controllers/manga/read.js";
import { deleteOne } from "../controllers/manga/delete.js";
import { update } from "../controllers/manga/update.js";
import { create } from "../controllers/manga/create.js";
import passport from "../middleware/passport.js";


const router = Router();


router.get("/all", passport.authenticate("jwt", { session: false }), allMangas)
router.get("/creator/:id", passport.authenticate("jwt", { session: false }), MangasByCreatorId)
router.get("/category/:id", passport.authenticate("jwt", { session: false }), MangasByCategoryId)
router.get("/id/:id", passport.authenticate("jwt", { session: false }), MangasById)
router.get("/favorite/:id", passport.authenticate("jwt", { session: false }), FavoriteMangas)
router.put("/update", passport.authenticate("jwt", { session: false }), update)
router.delete("/deleteOne/:id", passport.authenticate("jwt", { session: false }), deleteOne)
router.post("/create", passport.authenticate("jwt", { session: false }), create)




export default router


