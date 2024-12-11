import Author from "../../models/Author.js";

// Obtener todos los autores con filtro opcional por nombre
const allAuthors = async (req, res, next) => {
    try {
        const { name } = req.query;
        const query = name ? { name: { $regex: name, $options: "i" } } : {};

        const authors = await Author.find(query).populate("user_id");

        res.status(200).json({
            response: authors
        });
    } catch (error) {
        next(error);
    }
};

// Obtener un autor por su ID de usuario
const getAuthorById = async (req, res, next) => {
    try {
        const { id } = req.params;
        const author = await Author.find({ user_id: id }).populate("user_id");

        if (!author) {
            return res.status(404).json({
                success: false,
                message: "Author not found",
            });
        }

        res.status(200).json({
            response: author
        });
    } catch (error) {
        next(error);
    }
};

// Buscar autores por nombre
const searchAuthorsByName = async (req, res, next) => {
    try {
        const { name } = req.query;
        const authors = await Author.find({
            name: { $regex: name, $options: "i" }
        }).populate("user_id");

        res.status(200).json({
            response: authors
        });
    } catch (error) {
        next(error);
    }
};

// Exportar las funciones
export { allAuthors, getAuthorById, searchAuthorsByName };