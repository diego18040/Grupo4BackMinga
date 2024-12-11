import Comment from "../../models/Comments.js";

const allComments = async (req, res, next) => {
    try {
        let { name } = req.query;
        let query = {};

        if (name) {
            query.name = { $regex: `${name}`, $options: "i" };
        }

        const comments = await Comment.find(query)
            .populate('author_id')
            .populate('company_id')
            .populate('chapter_id', "_id title");

        res.status(200).json({
            response: comments
        });
    } catch (error) {
        next(error);
    }
};


const commentsByChapterId = async (req, res, next) => {
    try {
        const id = req.params.id;
        
        // Primero veamos si encontramos los comentarios
        const commentsChapter = await Comment.find({ chapter_id: id })
            .populate('author_id', '_id name photo user_id')
            .populate('company_id', '_id name photo user_id');

        // Debug detallado
        commentsChapter.forEach(comment => {
        });

        if (commentsChapter) {
            return res.status(200).json({
                response: commentsChapter
            });
        }

        return res.status(404).json({
            success: false,
            message: "comments not found verify the chapter id",
        });
        
    } catch (error) {
        next(error);
    }
};



export { allComments, commentsByChapterId };
