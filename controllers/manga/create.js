import Manga from "../../models/Manga.js"
import Company from "../../models/Company.js";
import Author from "../../models/Author.js";
import Category from "../../models/Category.js";

let create = async (req,res,next) =>{
    try {
        
        let id = req.params.id
        let categoryname = req.query.category
        let category = await Category.findOne({name: categoryname})
        if (!category) {
            return res.status(404).json({
                success: false,
                message: "Category not found",
            })
        }


        let author = await Author.findOne({user_id: id})
        let company = await Company.findOne({user_id: id})
        if (!author && !company) {
            return res.status(404).json({
                success: false,
                message: "Author or Company not found",
            })
        }
        
        let manga
        if (author) {
            manga = {...req.body, author_id: author._id, category_id: category._id}
        }else if (company) {
            manga = {...req.body, company_id: company._id, category_id: category._id}
        }
        
        let newManga = await Manga.create(manga)
        return res.status(201).json({
            response: newManga
        })
    } catch (error) {
        next(error)
    }
}


export {create}