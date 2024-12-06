import Reaction from "../../models/Reactions.js";


let deleteOne = async (req, res, next) => {
    try {
      const { id } = req.params;
      const deleted = await Reaction.findByIdAndDelete(id);
      if (!deleted) {
        return res.status(404).json({
          success: false,
          message: "Reaction not found",
        });
      }
      return res.status(200).json({
        success: true,
        message: "Reaction successfully deleted",
        response: deleted,
      });
    } catch (error) {
      return next(error);
    }
};


export { deleteOne };