import "dotenv/config.js"
import "../../config/database.js"
import Category from "../Category.js";


const categories = [
    {
        name: "shonen",
        color: "1",
        hover: "1",
        description: "Shonen is a Japanese term that refers to manga and anime that is primarily intended for young boys",
        cover_photo: "https://images.squarespace-cdn.com/content/v1/57825361440243db4a4b7830/1656915345343-CX1U062QNY1LAXM47KE3/55794e9f617740728f0181d7a5bab0f3.jpeg?format=2500w",
        character_photo: "https://www.clipartmax.com/png/middle/258-2583853_awesome-monkey-d-luffy-one-piece-with-white-background-luffy-d-monkey.png",
        admin_id: "674a456bbbe8747d4e262182"
    },
    {
        name: "seinen",
        color: "2",
        hover: "2",
        description: "Seinen is a Japanese term that refers to manga or anime that features a young adult male as the main character.",
        cover_photo: "https://static0.gamerantimages.com/wordpress/wp-content/uploads/2022/05/pjimage-(3)-7.jpg",
        character_photo: "https://w7.pngwing.com/pngs/65/314/png-transparent-guts-griffith-berserk-manga-fan-art-berserk-thumbnail.png",
        admin_id: "674a456bbbe8747d4e262182"
    },
    {
        name: "shojo",
        color: "3",
        hover: "3",
        description: "Shoujo is a Japanese word that refers to a category of manga and anime that is primarily intended for young girls and young adult women",
        cover_photo: "https://static0.gamerantimages.com/wordpress/wp-content/uploads/2023/01/shojo-manga-new-featured-image-2.jpg",
        character_photo: "https://static.wikia.nocookie.net/kaguyasama-wa-kokurasetai/images/a/ab/KaguyaAnime.png/revision/latest?cb=20190209185412",
        admin_id: "674a456bbbe8747d4e262182"
    },
    {
        name:"kodomo",
        color: "4",
        hover: "4",
        description: "En el anime kodomo, las historias están dirigidas a niños de entre 4 y 10 años y tienen tramas sencillas para transmitir lecciones importantes, como el respeto",
        cover_photo: "https://static.wikia.nocookie.net/enanimanga/images/9/9f/Doraemon.png/revision/latest?cb=20110809220936",
        character_photo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRubAaMCjm8TH5DCTkq41MSJmJZULUdPbRjww&s",
        admin_id: "674a456bbbe8747d4e262182"
    }
]


Category.insertMany(categories);