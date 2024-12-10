import { Router } from "express";
import { allAuthors,getAuthorById} from "../controllers/author/read.js";
import { updatePhoto, update } from "../controllers/author/update.js";
import { create } from "../controllers/author/create.js";
import { deleteOne } from "../controllers/author/delete.js";
import passport from "../middleware/passport.js";
import validator from "../middleware/validator.js"
import authorSignUpSchema from "../schema/createAuthor.js";
import authorUpdateSchema from "../schema/updateAuthor.js";
import existingAccounts from "../middleware/existingAccounts.js";
import isRole0 from "../middleware/isRole0.js";


const router = Router();

router.get("/all",passport.authenticate('jwt', { session: false }) , isRole0, allAuthors)
router.get('/:id', passport.authenticate('jwt', { session: false }), isRole0,getAuthorById)
router.post("/create", validator(authorSignUpSchema),passport.authenticate('jwt', { session: false }), existingAccounts  ,create)
router.put("/updatePhoto", updatePhoto)
router.put("/update/:id",passport.authenticate('jwt', { session: false }), isRole0,update)
router.delete("/deleteOne/:id", isRole0, deleteOne)





export default router