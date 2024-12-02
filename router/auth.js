import { Router } from "express";
import signIn from "../controllers/auth/signIn.js"
import signOut from "../controllers/auth/signOut.js";
import accaountNoExist from "../middleware/accountNoExits.js"
import isValidadPassword from "../middleware/isValidadPassword.js"
import generateToken from "../middleware/generateToken.js"
import passport from "../middleware/passport.js"; 


const routerAuth = Router();

routerAuth.post("/signIn",accaountNoExist,isValidadPassword,generateToken,signIn)
routerAuth.post("/signout", passport.authenticate("jwt", { session: false }), signOut)





export default routerAuth