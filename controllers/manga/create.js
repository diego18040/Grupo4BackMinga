import Manga from "../../models/Manga.js"

let create = async (req,res,next) =>{
    try {
        let manga = req.body

        
        let newManga = await Manga.create(manga)
        return res.status(201).json({
            response: newManga
        })
    } catch (error) {
        next(error)
    }
}


export {create}