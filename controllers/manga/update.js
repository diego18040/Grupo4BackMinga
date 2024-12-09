import Category from "../../models/Category.js";
import Manga from "../../models/Manga.js";

const update = async (req, res, next) => {
    try {
        
        let  Categoryname = req.query.category
        
        if (Categoryname) {
            let category = await Category.findOne({ name: Categoryname });
            if (!category) {
                return res.status(404).json({
                    success: false,
                    message: "Category not found"
                });
            }
            req.body.category_id = category._id
        }


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