import { Router } from "express";
import { allUsers,userById } from "../controllers/user/read.js";
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
routerUsers.get('/:id',passport.authenticate('jwt',{session:false}),userById)
routerUsers.post("/register",validator(userSignUpSchema),accountExists,createHash, register)
routerUsers.delete("/deleteOne/:id",passport.authenticate('jwt',{session:false}), deleteOne)
routerUsers.put("/update/:id",passport.authenticate('jwt',{session:false}), update)





export default routerUsers