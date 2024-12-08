import Manga from "../../models/Manga.js";
import Chapter from "../../models/Chapter.js";
import Reaction from "../../models/Reactions.js";




let deleteOne = async (req, res, next) => {
    try {
      const { id } = req.params;
      const deleted = await Manga.findByIdAndDelete(id);
      if (!deleted) {
        return res.status(404).json({
          success: false,
          message: "Manga not found",
        });
      }


      await Reaction.deleteMany({ manga_id: id });
      const deletedChapters = await Chapter.deleteMany({ manga_id: id });     



      return res.status(200).json({
        success: true,
        message: "Manga successfully deleted",
        response: deleted,
      });
    } catch (error) {
      return next(error);
    }
};





export {deleteOne}