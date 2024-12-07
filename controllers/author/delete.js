import Author from "../../models/Author.js";
import User from "../../models/User.js";
import Reaction from "../../models/Reactions.js";
import Comment from "../../models/Comments.js";

let deleteOne = async (req, res, next) => {
  try {
    const { id } = req.params;
    const author = await Author.findById(id);
    
    if (!author) {
      return res.status(404).json({
        success: false,
        message: "Author not found",
      });
    }

    //guardar id del usuario antes de eliminar
    const userId = author.user_id;

    // Eliminar el autor
    await Author.findByIdAndDelete(id);

    //eliminar las reactions
    await Reaction.deleteMany({author_id: id})

    //eliminar los comentarios
    await Comment.deleteMany({author_id: id})
  
    // Actualizar el rol del usuario
    const user = await User.findById(userId);
    if (user) {
      user.role = 0;
      await user.save();
    }

    return res.status(200).json({
      success: true,
      message: "Author successfully deleted and user role updated to 0",
      response: author
    });
  } catch (error) {
    return next(error);
  }
};

export { deleteOne };