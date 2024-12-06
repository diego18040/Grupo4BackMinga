import Author from "../../models/Author.js"
import User from "../../models/User.js"



const create = async (req, res, next) => {
    try {
        const author = req.body;
        const newAuthor = await Author.create(author);
        const user = await User.findById(newAuthor.user_id);
        if (!user) {
            return res.status(404).json({
                success: false,
                message: "User not found"
            });
        }
        user.role = 1;
        await user.save();
        res.status(201).json({
            response: newAuthor
        })
    }
    catch (error) {
        next(error);
    }
}

export { create }