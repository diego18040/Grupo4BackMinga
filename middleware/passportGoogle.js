import passport from "passport";
import { Strategy as GoogleStrategy } from "passport-google-oauth20";
import User from "../models/User.js";

export default passport.use(
    new GoogleStrategy(
        {
            clientID: process.env.GOOGLE_CLIENT_ID,
            clientSecret: process.env.GOOGLE_CLIENT_SECRET,
            callbackURL: process.env.GOOGLE_URI_BACK
        },
        async(accessToken, refreshToken, profile, done) => {
            try {

                // Buscar en la base de datos si el usuario existe
                let user = await User.findOne({email: profile.emails[0].value})
                
                if (!user){
                    // Separar el nombre completo en nombre y apellido
                    const nameParts = profile.displayName.split(' ');
                    const firstName = nameParts[0];
                    const lastName = nameParts.slice(1).join(' ');

                    // Crear el usuario con los datos de Google
                    user = new User({
                        firstName: firstName,
                        lastName: lastName || "No especificado",
                        email: profile.emails[0].value,
                        password: profile.id, 
                        photo: profile.photos[0].value || "https://default-photo-url.com",
                        country: "No especificado", 
                        online: false
                    })
                    await user.save()
                }
                return done(null, user)
            } catch (error) {
                console.error("Error en autenticación Google:", error);
                return done(error, null)
            }
        }
    )
)