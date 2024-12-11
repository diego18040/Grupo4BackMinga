import { Router } from "express";
import { allMangas, MangasByCreatorId, MangasByCategoryId, MangasById, FavoriteMangas } from "../controllers/manga/read.js";
import { deleteOne } from "../controllers/manga/delete.js";
import { update } from "../controllers/manga/update.js";
import { create } from "../controllers/manga/create.js";
import passport from "../middleware/passport.js";
import isRole0 from "../middleware/isRole0.js";


const router = Router();


router.get("/all", passport.authenticate("jwt", { session: false }), allMangas)
router.get("/creator/:id", passport.authenticate("jwt", { session: false }), isRole0, MangasByCreatorId)
router.get("/category/:id", passport.authenticate("jwt", { session: false }), MangasByCategoryId)
router.get("/id/:id", passport.authenticate("jwt", { session: false }), MangasById)
router.get("/favorite/:id", passport.authenticate("jwt", { session: false }), isRole0, FavoriteMangas)
router.put("/update/:id", passport.authenticate("jwt", { session: false }), update)
router.delete("/deleteOne/:id", passport.authenticate("jwt", { session: false }), deleteOne)
router.post("/create/:id", passport.authenticate("jwt", { session: false }), create)




export default router


