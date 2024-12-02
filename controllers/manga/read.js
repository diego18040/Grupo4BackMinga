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

export { allMangas };