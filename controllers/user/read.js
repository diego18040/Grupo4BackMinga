import User from "../../models/User.js";

const allUsers = async (req, res, next) => {
    try {

        let {name} = req.query
        let query = {}

        if (name) {
            query.name = {$regex: `${name}`, $options: "i"}
        }

        const users = await User.find(query);
        res.status(200).json({
            response: users
        })
    } catch (error) {
        next(error);
    }
};




export {allUsers}