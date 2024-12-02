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
    {
        email: "Aniplex.lector@ejemplo.com",
        password: "contraseña123",
        photo: "https://th.bing.com/th/id/R.616b1ea12dbd64c5170cee6fd55185e3?rik=ktzmepk8qScvFw&riu=http%3a%2f%2fi2.hdslb.com%2fbfs%2farchive%2fbfee0f1162ee680cbe025cdacc276d01ad1ae7e6.jpg&ehk=T4FqgMsg22j4n5e9oLeh85Z29FF0hsCcbytdN3%2f0lpo%3d&risl=&pid=ImgRaw&r=0",
        role: 0,
        online: false
    },
    {
        email: "Ufotable.lector@ejemplo.com",
        password: "contraseña123",
        photo: "https://th.bing.com/th/id/OIP.DCLBtJfePi41YE4OoN91gQHaEJ?rs=1&pid=ImgDetMain",
        role: 0,
        online: false
    },
    
    
    
]

User.insertMany(users)

