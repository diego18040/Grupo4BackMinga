import Chapter from "../../models/Chapter.js";
import Manga from "../../models/Manga.js";



const allChapters = async (req, res, next) => {
    try {
        let {title} = req.query
        let query = {}

        if (title) {
            query.title = {$regex: `${title}`, $options: "i"}
        }

        const chapters = await Chapter.find(query)
            .populate('manga_id');

        res.status(200).json({
            response: chapters
        })
    } catch (error) {
        next(error);
    }
};



const chaptersByMangaId = async (req, res, next) => {
    try {
        const id = req.params.id
        const chapters = await Chapter.find({ manga_id: id });
        if (chapters.length === 0) {
            return res.status(404).json({
                success: false,
                message: "chapters not found",
            });
        }
        res.status(200).json({
            response: chapters
        })
    } catch (error) {
        next(error);
    }
}

const chaptersById = async (req, res, next) => {
    try {
        const id = req.params.id
        const chapter = await Chapter.find({ _id: id });
        if (!chapter) {
            return res.status(404).json({
                success: false,
                message: "chapter not found verify the chapter id",
            });
        }
        res.status(200).json({
            response: chapter
        })
    } catch (error) {
        next(error);
    }
}







export {allChapters, chaptersByMangaId, chaptersById}