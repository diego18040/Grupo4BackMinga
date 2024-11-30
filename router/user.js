import { Router } from "express";
import { allUsers,userById } from "../controllers/user/read.js";
import { register } from "../controllers/user/resgister.js";
import  update  from "../controllers/user/update.js";
import { deleteOne } from "../controllers/user/delete.js";


const routerUsers = Router();

routerUsers.get("/all", allUsers)
routerUsers.get('/:id',userById)
routerUsers.post("/register", register)
routerUsers.put("/:id", update)
routerUsers.delete("/deleteOne/:id", deleteOne)





export default routerUsers