import Comment from "../../models/Comments.js";
import Author from "../../models/Author.js";
import Company from "../../models/Company.js";

let create = async (req,res,next) =>{
    try {
        let comment = req.body

        const author = await Author.findById(comment.author_id)
        const company = await Company.findById(comment.company_id)
        if (!author && !company) {
            return res.status(404).json({
                success: false,
                message: "Author or Company not found",
            });
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