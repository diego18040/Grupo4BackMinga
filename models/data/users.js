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
    {
        email: "Edison.lector@ejemplo.com",
        password: "contraseña123",
        photo: "https://randomuser.me/api/portraits/men/4.jpg",
        role: 3,
        online: false
    },
    {
        email: "Charles.lector@ejemplo.com",
        password: "contraseña123",
        photo: "https://randomuser.me/api/portraits/men/6.jpg",
        role: 0,
        online: false
    },
    {
        email: "Michael.lector@ejemplo.com",
        password: "contraseña123",
        photo: "https://randomuser.me/api/portraits/men/7.jpg",
        role: 0,
        online: false
    },
    {
        email: "Elena.lector@ejemplo.com",
        password: "contraseña123",
        photo: "https://randomuser.me/api/portraits/women/2.jpg",
        role: 0,
        online: false
    },
    {
        email: "Michelle.lector@ejemplo.com",
        password: "contraseña123",
        photo: "https://randomuser.me/api/portraits/women/5.jpg",
        role: 0,
        online: false
    },
    {
        email: "Augustine.lector@ejemplo.com",
        password: "contraseña123",
        photo: "https://randomuser.me/api/portraits/men/6.jpg",
        role: 0,
        online: false
    },
    
    
]

User.insertMany(users)

