import Author from "../../models/User.js"



const create = async (req, res, next) => {
    try {
        const author = req.body;
        const newAuthor = await Author.create(author);
        res.status(201).json({
            response: newAuthor
        })
    }
    catch (error) {
        next(error);
    }
}

export { create }