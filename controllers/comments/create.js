import Comment from "../../models/Comments.js";


let create = async (req,res,next) =>{
    try {
        let comment = req.body

        
        let newComment = await Comment.create(comment)
        return res.status(201).json({
            response: newComment
        })
    } catch (error) {
        next(error)
    }
}


export {create}