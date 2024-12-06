import Manga from "../../models/Manga.js";
import Category from "../../models/Category.js";
import Author from "../../models/Author.js";
import Company from "../../models/Company.js";
import Reaction from "../../models/Reactions.js";






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
            const categoriesArray = category.split(','); 
            mangas = mangas.filter((manga) => 
                categoriesArray.some(cat => 
                    manga.category_id.name.toLowerCase() === cat.toLowerCase()
                )
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


const MangasById = async (req, res, next) => {
    try {
        const id = req.params.id

        const manga = await Manga.find({ _id: id });

        if (manga) {
            return res.status(200).json({
                response: manga
            })
        }


        return res.status(404).json({
            success: false,
            message: "manga not found verify the manga id",
        });
        
    } catch (error) {
        next(error);
    }
}


const FavoriteMangas = async (req, res, next) => {
    try {
        const { id } = req.params;
        if (!id) {
            return res.status(400).json({
                success: false,
                message: "Company or author ID is required",
            });
        }

        const author = await Author.findById(id);
        const company = await Company.findById(id);

        if (!author && !company) {
            return res.status(404).json({
                success: false,
                message: "Author or company not found",
            });
        }

        let reactions;
        if (author) {
            reactions = await Reaction.find({ author_id: author._id });
        } else if (company) {
            reactions = await Reaction.find({ company_id: company._id });
        }

        if (reactions.length === 0) {
            return res.status(404).json({
                success: false,
                message: "No reactions found for this author or company",
            });
        }

        let filteredReactions = reactions.filter((reaction) => reaction.reaction == 4 || reaction.reaction == 1);

        const mangas = await Promise.all(
            filteredReactions.map(async (reaction) => {
                return Manga.findById(reaction.manga_id);
            })
        );

        

        return res.status(200).json({
            success: true,
            response: mangas,
        });
    } catch (error) {
        next(error);
    }
};



export { allMangas, MangasByCreatorId, MangasByCategoryId, MangasById, FavoriteMangas };