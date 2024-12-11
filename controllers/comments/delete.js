import Comment from "../../models/Comments.js";


let deleteOne = async (req, res, next) => {
    try {
      const { id } = req.params;
      const deleted = await Comment.findByIdAndDelete(id);
      if (!deleted) {
        return res.status(404).json({
          success: false,
          message: "Comment not found",
        });
      }
      return res.status(200).json({
        success: true,
        message: "Comment successfully deleted",
        response: deleted,
      });
    } catch (error) {
      return next(error);
    }
};


export {deleteOne}