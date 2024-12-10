import { Router } from "express";
import jwt from 'jsonwebtoken';
import signIn from "../controllers/auth/signIn.js"
import signOut from "../controllers/auth/signOut.js";
import accaountNoExist from "../middleware/accountNoExits.js"
import isValidadPassword from "../middleware/isValidadPassword.js"
import generateToken from "../middleware/generateToken.js"
import passport from "../middleware/passport.js"; 
import passportGoogle from "../middleware/passportGoogle.js";
import signInGoogle from "../controllers/auth/handleGoogleCallback.js";


const routerAuth = Router();

routerAuth.post('/signIn',accaountNoExist,isValidadPassword,generateToken,signIn)
routerAuth.post('/signout', passport.authenticate('jwt', { session: false }), signOut)

//ruta para iniciar secion con google
routerAuth.get(
  '/signin/google',
  passportGoogle.authenticate('google',{session: false, scope: ['profile','email']})
)
// Ruta de callback después de la autenticación con Google
routerAuth.get(
  "/signin/google/callback",
  passport.authenticate("google", {
    session: false,
    failureRedirect: `${process.env.FRONTEND_URL || "http://localhost:5173"}/signin`,
  }),
  generateToken, // Genera el token JWT con _id y email
  (req, res) => {
    try {
      res.redirect(
        `${process.env.FRONTEND_URL || "http://localhost:5173"}/signin?token=${req.token}&userId=${req.user._id}`
      );      
    } catch (error) {
      console.error("Error en la redirección de Google:", error);
      res.redirect(`${process.env.FRONTEND_URL || "http://localhost:5173"}/signin?error=auth_failed`);
    }
  }
);




export default routerAuth