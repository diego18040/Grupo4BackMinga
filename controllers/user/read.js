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

const userById = async (req,res,next) => {
    try {
        console.log(req.params);
        let roleQuery = req.params.id
        let all = await User.findById(roleQuery)
        return res.status(200).json({
            response: all
        })
    } catch (error) {
        next(error)
    }        
}

const userByIdToken = async (req, res, next) => {
    try {

        return res.status(200).json({
            succes: true,
            response: req.user
        });
    } catch (error) {
        next(error)
    }
}

export {allUsers,userById, userByIdToken}