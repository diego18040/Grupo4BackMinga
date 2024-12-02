import Author from "../../models/Author.js";

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