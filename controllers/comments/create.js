import Comment from "../../models/Comments.js";
import Author from "../../models/Author.js";
import Company from "../../models/Company.js";

let create = async (req,res,next) =>{
    try {

        let id = req.query.id

        let author = await Author.findOne({user_id: id})
        let company = await Company.findOne({user_id: id})
        if (!author && !company) {
            return res.status(404).json({
                success: false,
                message: "Author or Company not found",
            })
        }
        
        let comment
        if (author) {
            comment = {...req.body, author_id: author._id}
        }else if (company) {
            comment = {...req.body, company_id: company._id}
        }
           
        
        let newComment = await Comment.create(comment)
        return res.status(201).json({
            response: newComment
        })
    } catch (error) {
        next(error)
    }
}


export {create}