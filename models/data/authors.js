//DATOS DEL SERVIDOR
import "dotenv/config.js"
//DATA DE MONGO
import "../../config/database.js"
import Author from "../Author.js";

const authors = [
    {
        name: "Charles",
        last_name: "Dickens",
        city: "Cambridge",
        country: "United Kingdom",
        date: "1983-09-25",
        photo: "https://randomuser.me/api/portraits/men/15.jpg",
        user_id: "674a456bbbe8747d4e262187",
        active: true
    },
    {
        name: "Michael",
        last_name: "Thompson",
        city: "London",
        country: "United Kingdom",
        date: "1985-03-15",
        photo: "https://randomuser.me/api/portraits/men/11.jpg",
        user_id: "674a456bbbe8747d4e262188",
        active: true
    },
    {
        name: "Elena",
        last_name: "Wilson",
        city: "New York",
        country: "United States",
        date: "1990-07-22",
        photo: "https://randomuser.me/api/portraits/women/12.jpg",
        user_id: "674a456bbbe8747d4e262189",
        active: true
    },
    {
        name: "Michelle",
        last_name: "Parker",
        city: "Dublin",
        country: "Ireland",
        date: "1988-11-30",
        photo: "https://randomuser.me/api/portraits/women/13.jpg",
        user_id: "674a456bbbe8747d4e26218a",
        active: true
    },
    {
        name: "Augustine",
        last_name: "Brown",
        city: "Boston",
        country: "United States",
        date: "1992-05-18",
        photo: "https://randomuser.me/api/portraits/men/14.jpg",
        user_id: "674a456bbbe8747d4e26218b",
        active: true
    }
]

Author.insertMany(authors)