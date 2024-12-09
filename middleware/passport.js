import User from "../models/User.js";
import passport from "passport";
import { Strategy, ExtractJwt } from "passport-jwt";

export default passport.use(
  new Strategy(
    {
      jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
      secretOrKey: process.env.SECRET,
    },
    async (jwt_payload, done) => {
      try {
        console.log("JWT Payload recibido:", jwt_payload);

        if (!jwt_payload.email) {
          return done(null, false, { message: "Invalid token: email missing" });
        }

        let user = await User.findOne({ email: jwt_payload.email });
        if (!user) {
          return done(null, false, { message: "User not found" });
        }

        return done(null, user);
      } catch (error) {
        console.error("Error en la autenticación JWT:", error);
        return done(error, false);
      }
    }
  )
);
