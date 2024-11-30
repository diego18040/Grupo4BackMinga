import Category from "../../models/Category.js";


const allCategories = async (req, res, next) => {
    try {

        let {name} = req.query
        let query = {}

        if (name) {
            query.name = {$regex: `${name}`, $options: "i"}
        }

        const categories = await Category.find(query);
        res.status(200).json({
            response: categories
        })
    } catch (error) {
        next(error);
    }
};




export {allCategories}