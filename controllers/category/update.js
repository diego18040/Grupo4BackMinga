import Category from "../../models/Category.js";

const update = async (req, res, next) => {
    try {
        const { id, ...dataToUpdate } = req.body;

      
        if (!id) {
            return res.status(400).json({
                success: false,
                message: "valid category ID is required",
            });
        }

        
        const updatedCategory = await Category.findByIdAndUpdate(
            id,               
            dataToUpdate,     
            {
                new: true,      
                runValidators: true, 
            }
        );

  
        if (!updatedCategory) {
            return res.status(404).json({
                success: false,
                message: "Category not found",
            });
        }


        res.status(200).json({
            success: true,
            message: "Category successfully updated",
            response: updatedCategory,
        });
    } catch (error) {
        next(error); 
    }
};

export { update };
