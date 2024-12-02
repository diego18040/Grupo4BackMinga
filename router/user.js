import { Router } from "express";
import { allUsers,userById } from "../controllers/user/read.js";
import { register } from "../controllers/user/resgister.js";
import  update  from "../controllers/user/update.js";
import { deleteOne } from "../controllers/user/delete.js";
import passport from "../middleware/passport.js";
import accountExists from "../middleware/accountExist.js";
import createHash from "../middleware/createHash.js"



const routerUsers = Router();

routerUsers.get("/all",passport.authenticate('jwt',{session:false}),allUsers)
routerUsers.get('/:id',userById)
routerUsers.post("/register",accountExists,createHash, register)
routerUsers.put("/:id", update)
routerUsers.delete("/deleteOne/:id", deleteOne)





export default routerUsers