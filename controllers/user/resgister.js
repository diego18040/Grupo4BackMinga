import User from "../../models/User.js";

let register = async (req, res, next) => {
  try {
    console.log("Datos recibidos para registro:", req.body);

    req.body.online = false; // Asegurar que se establece este valor
    let createdUser = await User.create(req.body);

    console.log("Usuario creado:", createdUser);

    if (!createdUser) {
      return res.status(500).json({ error: "Failed to create user" });
    }

    return res.status(201).json({
      user: {
        _id: createdUser._id.toString(),
        email: createdUser.email,
      },
    });
  } catch (error) {
    console.error("Error en el registro:", error);
    next(error);
  }
};

export { register };
