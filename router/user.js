import { Router } from "express";
import { allUsers,userById,userByIdToken } from "../controllers/user/read.js";
import { register } from "../controllers/user/resgister.js";
import  update  from "../controllers/user/update.js";
import { deleteOne } from "../controllers/user/delete.js";
import passport from "../middleware/passport.js";
import accountExists from "../middleware/accountExist.js";
import createHash from "../middleware/createHash.js"
import validator from "../middleware/validator.js"
import userSignUpSchema from "../schema/createUsers.js"
import userUpdateSchema from "../schema/updateUsers.js"



const routerUsers = Router();

routerUsers.get("/all",passport.authenticate('jwt',{session:false}),allUsers)
routerUsers.get('/validatetoken', passport.authenticate('jwt', { session: false }), userByIdToken);
routerUsers.get('/id/:id',passport.authenticate('jwt',{session:false}),userById)
routerUsers.post("/register",validator(userSignUpSchema),accountExists,createHash, register)
routerUsers.put("/:id",validator(userUpdateSchema),passport.authenticate('jwt',{session:false}),createHash, update)
routerUsers.delete("/deleteOne/:id",passport.authenticate('jwt',{session:false}), deleteOne)





export default routerUsers