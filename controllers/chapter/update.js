
import Chapter from "../../models/Chapter.js";

const update = async (req, res, next) => {
    try {
        let id = req.params.id

        const { ...dataToUpdate } = req.body;
        const updatedChapter = await Chapter.findByIdAndUpdate(
            id,              
            dataToUpdate,      
            {
                new: true,      
                runValidators: true 
            }
        );

        if (!updatedChapter) {
            return res.status(404).json({
                success: false,
                message: "Chapter not found"
            });
        }

        return res.status(200).json({
            success: true,
            message: "Chapter successfully updated",
            response: updatedChapter
        });
    } catch (error) {
        next(error);
    }
};

export { update };
