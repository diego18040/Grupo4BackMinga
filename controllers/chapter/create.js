import Chapter from "../../models/Chapter.js";
import Manga from "../../models/Manga.js";

let create = async (req, res, next) => {
    try {
        let chapter = req.body;
        let newChapter = await Chapter.create(chapter);
        let populatedChapter = await Chapter.findById(newChapter._id)
            .populate({
                path: 'manga_id',
                model: Manga,
                select: 'title cover_photo'
            });
            
        return res.status(201).json({
            response: populatedChapter
        });
    } catch (error) {
        next(error);
    }
}

export { create };