import Author from "../../models/Author.js";

const allAuthors = async (req, res, next) => {
    try {
        let {name} = req.query
        let query = {}

        if (name) {
            query.name = {$regex: `${name}`, $options: "i"}
        }

        const authors = await Author.find(query)
            .populate('user_id'); 

        res.status(200).json({
            response: authors
        })
    } catch (error) {
        next(error);
    }
};
const getAuthorById = async (req, res, next) => {
    try {
        const { id } = req.params;
        const author = await Author.findById(id)
            .populate('user_id');

        res.status(200).json({
            response: author
        });
    } catch (error) {
        next(error);
    }
};
const searchAuthorsByName = async (req, res, next) => {
    try {
        const { name } = req.query;
        const authors = await Author.find({
            name: { $regex: name, $options: "i" }
        }).populate('user_id');

        res.status(200).json({
            response: authors
        });
    } catch (error) {
        next(error);
    }
};


export {allAuthors,getAuthorById,searchAuthorsByName}