import User from "../../models/User.js"
import Comment from "../../models/Comments.js"
import Reaction from "../../models/Reactions.js"
import Manga from "../../models/Manga.js"
import Author from "../../models/Author.js"
import Company from "../../models/Company.js"

let deleteOne = async (req, res, next) => {
  try {
    const { id } = req.params;
    const deleted = await User.findByIdAndDelete(id);
    if (!deleted) {
      return res.status(404).json({
        success: false,
        message: "User not found",
      });
    }
    return res.status(200).json({
      success: true,
      message: "User successfully deleted",
      response: deleted,
    });
  } catch (error) {
    return next(error);
  }
};

export { deleteOne };