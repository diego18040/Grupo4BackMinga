// controllers/cities/auth/handleGoogleCallback.js
import jwt from 'jsonwebtoken';
import User from "../../models/User.js";

export default async (req, res,next) => {
  try {
    // Los datos ya vienen en req.user como un usuario existente
    const user= await User.findOneAndUpdate (
      {email: req.user.email},
      {online: true},
      {new: true}
    );
    // Verificar que tengamos los datos necesarios
    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }


    // Generar token
    const token = jwt.sign(
      { 
        id: user._id,
        email: user.email 
      }, 
      process.env.SECRET,
      { expiresIn: '24h' }
    );

     // Redirigir al frontend con el token
     const redirectUrl = `http://localhost:5173/?token=${token}`;
     return res.redirect(redirectUrl);

    // Enviar respuesta
   /* res.redirect(
      `${process.env.FRONTEND_URL || 'http://localhost:5173'}/signin?` +
      `token=${token}&` +
      `userData=${encodeURIComponent(JSON.stringify(userData))}`
    );*/

  } catch (error) {
    /*console.error('Error en Google callback:', error);
    res.redirect(`${process.env.FRONTEND_URL || 'http://localhost:5173'}/signin?error=auth_failed`);*/
    next (error)
  }
};