import jwt from 'jsonwebtoken';

export default (req, res, next) => {
  try {
    if (!req.user) {
      return res.status(400).json({ error: "No authenticated user found" });
    }

    // Generar el token con el _id del usuario
    const token = jwt.sign(
      {
        userId: req.user._id, // Incluir _id en el payload
        email: req.user.email,
      },
      process.env.SECRET,
      { expiresIn: "24h" }
    );

    req.token = token; // Pasar el token al siguiente middleware o controlador
    next();
  } catch (error) {
    console.error("Error generando el token:", error);
    res.status(500).json({ error: "Failed to generate token" });
  }
};
