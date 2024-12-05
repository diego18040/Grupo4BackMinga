// controllers/cities/auth/handleGoogleCallback.js
import jwt from 'jsonwebtoken';
import User from "../../models/User.js";

export const handleGoogleCallback = async (req, res) => {
  try {
    // Verificar que tengamos los datos necesarios
    if (!req.user) {
      throw new Error('No user data received');
    }

    // Los datos ya vienen en req.user como un usuario existente
    const userData = {
      email: req.user.email,
      firstName: req.user.firstName,
      lastName: req.user.lastName,
      photo: req.user.photo
    };

    // Generar token
    const token = jwt.sign(
      { 
        userId: req.user._id,
        email: userData.email 
      }, 
      process.env.JWT_SECRET,
      { expiresIn: '24h' }
    );

    // Enviar respuesta
    res.redirect(
      `${process.env.FRONTEND_URL || 'http://localhost:5173'}/signin?` +
      `token=${token}&` +
      `userData=${encodeURIComponent(JSON.stringify(userData))}`
    );

  } catch (error) {
    console.error('Error en Google callback:', error);
    res.redirect(`${process.env.FRONTEND_URL || 'http://localhost:5173'}/signin?error=auth_failed`);
  }
};