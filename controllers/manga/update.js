import Manga from "../../models/Manga.js";

const update = async (req, res, next) => {
    try {
       
        const { id, ...dataToUpdate } = req.body; 

      
        const updatedManga = await Manga.findByIdAndUpdate(
            id,               
            dataToUpdate,     
            {
                new: true,      
                runValidators: true 
            }
        );


        if (!updatedManga) {
            return res.status(404).json({
                success: false,
                message: "Manga not found"
            });
        }

        return res.status(200).json({
            success: true,
            message: "Manga successfully updated",
            response: updatedManga
        });
    } catch (error) {

        next(error);
    }
};

export { update };