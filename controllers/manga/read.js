import Manga from "../../models/Manga.js";



const allMangas = async (req, res, next) => {
    try {
        const { title, category } = req.query;
        let query = {};
        if (title) {
            query.title = { $regex: `${title}`, $options: "i" }; 
        }

        let mangas = await Manga.find(query)
            .populate('author_id', '_id name')
            .populate('company_id', '_id name')
            .populate('category_id', '_id name');

        if (category) {
            mangas = mangas.filter((manga) =>
                manga.category_id.name.toLowerCase().includes(category.toLowerCase())
            );
        }

        if (mangas.length === 0) {
            return res.status(404).json({
                success: false,
                message: "No mangas found check the query parameters",
            });
        }


        res.status(200).json({
            success: true,
            response: mangas,
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

const MangasByCategoryId = async (req, res, next) => {
    try {
        const id = req.params.id

        const mangasCategory = await Manga.find({ category_id: id });

        if (mangasCategory) {
            return res.status(200).json({
                response: mangasCategory
            })
        }


        return res.status(404).json({
            success: false,
            message: "mangas not found verify the category id",
        });
        
    } catch (error) {
        next(error);
    }
}






export { allMangas, MangasByCreatorId, MangasByCategoryId };