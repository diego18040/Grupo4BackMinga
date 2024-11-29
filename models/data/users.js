//DATOS DEL SERVIDOR
import "dotenv/config.js"
//DATA DE MONGO
import "../../config/database.js"
import User from "../User.js";

const users = [
    {
        email: "Gabriel.lector@ejemplo.com",
        password: "contraseña123",
        photo: "https://randomuser.me/api/portraits/men/1.jpg",
        role: 3,
        online: false
    },
    {
        email: "Diego.lector@ejemplo.com",
        password: "contraseña123",
        photo: "https://randomuser.me/api/portraits/men/2.jpg",
        role: 3,
        online: false
    },
    {
        email: "Felipe.lector@ejemplo.com",
        password: "contraseña123",
        photo: "https://randomuser.me/api/portraits/men/3.jpg",
        role: 3,
        online: false
    },
    {
        email: "Xorangel.lector@ejemplo.com",
        password: "contraseña123",
        photo: "https://randomuser.me/api/portraits/women/1.jpg",
        role: 3,
        online: false
    },
    
]

User.insertMany(users)

