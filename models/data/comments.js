import "dotenv/config.js"
import "../../config/database.js"
import Comment from "../Comments.js";

let comments = [
    // Comentarios para el primer capítulo de Alice in Borderland
    {
        chapter_id: "674a843fd193ce153022f434", 
        author_id: "674a493aed1e5f128bde46a4",
        message: "La adaptación visual de las escenas de acción en este capítulo captura perfectamente la tensión del material original."
    },
    {
        chapter_id: "674a843fd193ce153022f434",
        company_id: "674a456bbbe8747d4e26218c",
        message: "La narrativa mantiene un ritmo excelente. Los lectores quedarán enganchados desde el principio."
    },

    // Comentarios para capítulos de Shingeki no Kyojin
    {
        chapter_id: "674a8441d193ce153022f44e",
        author_id: "674a493aed1e5f128bde46a5",
        message: "La forma en que se desarrolla el misterio de los titanes es magistral. Cada capítulo añade una nueva capa de profundidad."
    },
    {
        chapter_id: "674a8441d193ce153022f44e",
        company_id: "674a456bbbe8747d4e26218d",
        message: "La calidad del arte y el detalle en las escenas de acción son excepcionales."
    },

    // Comentarios para The Promise Neverland
    {
        chapter_id: "674a8442d193ce153022f464",
        author_id: "674a493aed1e5f128bde46a7",
        message: "El desarrollo de los personajes y la construcción del suspense son realmente impresionantes."
    },
    {
        chapter_id: "674a8442d193ce153022f464",
        author_id: "674a493aed1e5f128bde46a8",
        message: "La atmósfera oscura y el misterio se mantienen perfectamente a lo largo de la historia."
    },

    // Comentarios para Bleach
    {
        chapter_id: "674a8444d193ce153022f47c",
        author_id: "674a493aed1e5f128bde46a5",
        message: "Las secuencias de batalla están magníficamente coreografiadas y el estilo artístico es único."
    },
    {
        chapter_id: "674a8444d193ce153022f47c",
        author_id: "674a493aed1e5f128bde46a6",
        message: "La mezcla de acción y desarrollo de personajes mantiene a los lectores completamente involucrados."
    }
]

Comment.insertMany(comments)