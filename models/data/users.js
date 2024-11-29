//DATOS DEL SERVIDOR
import "dotenv/config.js"
//DATA DE MONGO
import "../../config/database.js"
import User from "../User.js";

const users = [
    {
        email: "usuario.lector@ejemplo.com",
        password: "contraseña123",
        photo: "https://ejemplo.com/foto-perfil.jpg",
        role: 0,
        online: false
    }
]

User.insertMany(users)

