import Author from "../../models/Author.js";

const allAuthors = async (req, res, next) => {
    try {

        let {name} = req.query
        let query = {}

        if (name) {
            query.name = {$regex: `${name}`, $options: "i"}
        }

        const authors = await Author.find(query);
        res.status(200).json({
            response: authors
        })
    } catch (error) {
        next(error);
    }
};




export {allAuthors}