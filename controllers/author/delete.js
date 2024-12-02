import Author from "../../models/Author.js";
import User from "../../models/User.js";

let deleteOne = async (req, res, next) => {
  try {
    const { id } = req.params;

    const deleted = await Author.findByIdAndDelete(id);
    if (!deleted) {
      return res.status(404).json({
        success: false,
        message: "Author not found",
      });
    }

    // usuario asociado a la compañía
    const userId = company.user_id;
    const user = await User.findById(userId);

    if (user) {
      // rol del usuario a 0
      user.role = 0;
      await user.save();
    }

    return res.status(200).json({
      success: true,
      message: "Author successfully deleted",
      response: deleted,
    });
  } catch (error) {
    return next(error);
  }
};

export { deleteOne };