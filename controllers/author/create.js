import Author from "../../models/Author.js"
import User from "../../models/User.js"



const create = async (req, res, next) => {
    try {
        const author = req.body;
      
        const user = await User.findById(author.user_id);
        if (!user) {
            return res.status(404).json({
                success: false,
                message: "User not found"
            });
        }
    
        const newAuthor = await Author.create(author);
        await User.findByIdAndUpdate(
            author.user_id,
            { role: 1 },
            { new: true }  // hace que devuelva el documento actualizado
        );

        res.status(201).json({
            response: newAuthor
        })
    }
    catch (error) {
        next(error);
    }
}

export { create }