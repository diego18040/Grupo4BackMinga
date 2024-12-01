import "dotenv/config.js"
import "../../config/database.js"
import Reaction from "../Reactions.js";

const reactions = [
    //Alice in Borderland
    {
        manga_id: "674a843ed193ce153022f432",
        author_id: "674a456bbbe8747d4e262187",
        reaction: 1
    },
    //Shingeki no Kyojin
    {
        manga_id: "674a8440d193ce153022f44c",
        author_id: "674a456bbbe8747d4e262188",
        reaction: 5
    },
    //The promise neverland
    {
        manga_id: "674a8442d193ce153022f462",
        author_id: "674a493aed1e5f128bde46a4",
        reaction: 2
    },
    //Bleach
    {
        manga_id: "674a8444d193ce153022f47a",
        author_id: "674a493aed1e5f128bde46a5",
        reaction: 1
    },
    {
        //Another
        manga_id: "674a8446d193ce153022f492",
        author_id: "674a493aed1e5f128bde46a5",
        reaction: 4
    },
    //Gantz
    {
        manga_id: "674a8448d193ce153022f4aa",
        author_id: "674a493aed1e5f128bde46a5",
        reaction: 1
    },
    {
        //Punpun
        manga_id: "674a844ad193ce153022f4c2",
        author_id: "674a493aed1e5f128bde46a5",
        reaction: 2
    },
    //Pokemon
    {
        manga_id: "674a844cd193ce153022f4da",
        author_id: "674a493aed1e5f128bde46a6",
        reaction: 5
    },
    {
        //Citrus
        manga_id: "674a844ed193ce153022f4fa",
        author_id: "674a493aed1e5f128bde46a6",
        reaction: 1
    },
    {
        //Ao Haru Ride
        manga_id: "674a8450d193ce153022f516",
        author_id: "674a493aed1e5f128bde46a6",
        reaction: 5
    }
]

Reaction.insertMany(reactions)