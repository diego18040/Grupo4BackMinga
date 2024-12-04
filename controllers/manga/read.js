import Manga from "../../models/Manga.js";


const allMangas = async (req, res, next) => {
    try {
        let { title } = req.query;
        let query = {};

        if (title) {
            query.title = { $regex: `${title}`, $options: "i" };
        }

        const mangas = await Manga.find(query)
            .populate('author_id')
            .populate('company_id')
            .populate('category_id');

        res.status(200).json({
            response: mangas
        });
    } catch (error) {
        next(error);
    }
};


const MangasByCreatorId = async (req, res, next) => {
    try {
        const id = req.params.id

        const mangasAuthor = await Manga.find({ author_id: id });

        if (mangasAuthor) {
            return res.status(200).json({
                response: mangasAuthor
            })
        }

        const mangasCompany = await Manga.find({ company_id: id });

        if (mangasCompany) {
            return res.status(200).json({
                response: mangasCompany
            })
        }


        return res.status(404).json({
            success: false,
            message: "mangas not found verify id of author or company",
        });
        
    } catch (error) {
        next(error);
    }
}





export { allMangas };