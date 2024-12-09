import Author from "../../models/Author.js"
import User from "../../models/User.js"
import generateToken from "../../middleware/generateToken.js";
import mongoose from "mongoose"; 



const create = async (req, res, next) => {
    try {
        console.log("Datos del autor recibidos:", req.body);
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
            { new: true } 
        );
        req.user.role = 1
        console.log("esto es EL NUEVO req.user", req.user);
        const token = await generateToken(req, res, next, true);
        res.status(201).json({
            response: newAuthor,
            token: token,
            user: req.user

        })
    }
    catch (error) {
        next(error);
    }
}

export { create }