import Chapter from "../../models/Chapter.js";
import Manga from "../../models/Manga.js";

let create = async (req,res,next) =>{
    try {
        let chapter = req.body
        let idManga = req.params.mangaid
        console.log("esto es idManga", idManga);

        let manga = await Manga.findById(idManga)
        if (!manga) {
            return res.status(404).json({
                success: false,
                message: "Manga not found",
            })
        }
        req.body.cover_photo = req.body.pages[0]
        req.body.manga_id = manga._id


        let newChapter = await Chapter.create(chapter)
        return res.status(201).json({
            response: newChapter
        })
    } catch (error) {
        next(error)
    }
}


export {create}