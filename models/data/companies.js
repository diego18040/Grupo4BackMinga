//DATOS DEL SERVIDOR
import "dotenv/config.js"
//DATA DE MONGO
import "../../config/database.js"
import Company from "../Company.js";

const companies = [
    {
        name: "Aniplex",
        website: "https://www.aniplex.com",
        description: "Aniplex es una empresa japonesa productora y distribuidora de anime, música y videojuegos. Es una subsidiaria de Sony Music Entertainment Japan y ha producido numerosas series de anime populares.",
        photo: "https://th.bing.com/th/id/R.616b1ea12dbd64c5170cee6fd55185e3?rik=ktzmepk8qScvFw&riu=http%3a%2f%2fi2.hdslb.com%2fbfs%2farchive%2fbfee0f1162ee680cbe025cdacc276d01ad1ae7e6.jpg&ehk=T4FqgMsg22j4n5e9oLeh85Z29FF0hsCcbytdN3%2f0lpo%3d&risl=&pid=ImgRaw&r=0",
        user_id: "674a456bbbe8747d4e26218c",
        active: true
    },
    {
        name: "Ufotable",
        website: "http://www.ufotable.com",
        description: "Ufotable es un estudio de animación japonés conocido por su alta calidad de animación y efectos visuales. Son famosos por series como Demon Slayer y la franquicia Fate.",
        photo: "https://th.bing.com/th/id/OIP.DCLBtJfePi41YE4OoN91gQHaEJ?rs=1&pid=ImgDetMain",
        user_id: "674a456bbbe8747d4e26218d",
        active: true
    }
]

Company.insertMany(companies)