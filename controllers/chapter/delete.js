import Chapter from "../../models/Chapter.js";
import Comment from "../../models/Comments.js";


let deleteOne = async (req, res, next) => {
    try {
      const { id } = req.params;
      const deleted = await Chapter.findByIdAndDelete(id);


      if (!deleted) {
        return res.status(404).json({
          success: false,
          message: "Chapter not found",
        });
      }


      await Comment.deleteMany({ chapter_id: id });

      return res.status(200).json({
        success: true,
        message: "Chapter successfully deleted",
        response: deleted,
      });
    } catch (error) {
      return next(error);
    }
};




export { deleteOne };