import Comment from "../../models/Comments.js";


const updateMessage = async (req, res, next) => {
    try {
        let comment = req.body
        const commentExists = await Comment.findById(comment._id)
        if (!commentExists) {
            return res.status(404).json({
                message: "Comment not found. Please try another ID."
            });
        }
        let upd = await Comment.updateOne(
            { _id: comment._id },
            { message: comment.message }
        )

        if (upd) {
            return res.status(200).json({
                response: upd
            })
        }
    } catch (error) {
        next(error) 
    }
}

export {updateMessage}