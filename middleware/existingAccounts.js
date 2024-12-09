import Company from "../models/Company.js";
import Author from "../models/Author.js"; 

export default async (req, res, next) => {
    try {
        // Verificar si tenemos el usuario
        if (!req.user || !req.user._id) {
            return res.status(401).json({
                success: false,
                message: 'User not authenticated properly'
            });
        }

        console.log(req.user);
        

        const userId = req.body.user_id 

        // Verificar si ya tiene una compañía
        const existingCompany = await Company.findOne({ user_id: userId });
        
        if (existingCompany) {
            return res.status(400).json({
                success: false,
                message: 'You already have a company account'
            });
        }

        // Verificar si ya tiene un autor
        const existingAuthor = await Author.findOne({ user_id: userId });
        
        if (existingAuthor) {
            return res.status(400).json({
                success: false,
                message: 'You already have an author account'
            });
        }

        // Añadir el userId al body para asegurarnos que se use el correcto
        req.body.user_id = userId;

        // Si no tiene ninguno, continuar
        next();
    } catch (error) {
        next(error);
    }
}