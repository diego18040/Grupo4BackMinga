import User from "../../models/User.js"

let deleteOne = async (req, res, next) => {
  try {
    const { id } = req.params;
    const deleted = await User.findByIdAndDelete(id);
    if (!deleted) {
      return res.status(404).json({
        success: false,
        message: "Property not found",
      });
    }
    return res.status(200).json({
      success: true,
      message: "Property successfully deleted",
      response: deleted,
    });
  } catch (error) {
    return next(error);
  }
};

export { deleteOne };