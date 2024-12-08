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


const router = Router();

router.get("/all",passport.authenticate('jwt', { session: false }) , allAuthors)
router.get('/:id', passport.authenticate('jwt', { session: false }),getAuthorById)
router.post("/create", validator(authorSignUpSchema),passport.authenticate('jwt', { session: false }), existingAccounts  ,create)
router.put("/updatePhoto", updatePhoto)
router.put("/update",  validator(authorSignUpSchema),passport.authenticate('jwt', { session: false }) ,update)
router.delete("/deleteOne/:id", deleteOne)





export default router