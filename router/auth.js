import { Router } from "express";
import signIn from "../controllers/auth/signIn.js"
import signOut from "../controllers/auth/signOut.js";
import accaountNoExist from "../middleware/accountNoExits.js"
import isValidadPassword from "../middleware/isValidadPassword.js"
import generateToken from "../middleware/generateToken.js"
import passport from "../middleware/passport.js"; 
import passportGoogle from "../middleware/passportGoogle.js";
import {handleGoogleCallback} from "../controllers/auth/handleGoogleCallback.js"


const routerAuth = Router();

routerAuth.post("/signIn",accaountNoExist,isValidadPassword,generateToken,signIn)
routerAuth.post("/signout", passport.authenticate("jwt", { session: false }), signOut)
//ruta para iniciar secion con google
routerAuth.get("/signin/google",passportGoogle.authenticate("google",{session:false, scope:["profile","email"]})
)
// Ruta de callback después de la autenticación con Google
routerAuth.get(
    '/signin/google/callback',
    passport.authenticate('google', {
      session: false,
      failureRedirect: `${process.env.FRONTEND_URL || 'http://localhost:5173'}/signin`,
    }),
    handleGoogleCallback // Controlador para manejar el callback
  );
  





export default routerAuth