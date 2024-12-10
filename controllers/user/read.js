import User from "../../models/User.js";
import mongoose from 'mongoose'; // Asegúrate de importar mongoose

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

const userById = async (req, res, next) => {
    try {
      const { id } = req.params;
  
      // Validar que el ID es un ObjectId válido
      if (!mongoose.isValidObjectId(id)) {
        return res.status(400).json({ error: "Invalid ID format" });
      }
  
      // Buscar usuario por ID
      const user = await User.findById(id);
      if (!user) {
        return res.status(404).json({ error: "User not found" });
      }
  
      return res.status(200).json({ response: user });
    } catch (error) {
      next(error);
    }
  };



export {allUsers,userById,userByIdToken}