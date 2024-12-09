import Author from "../../models/Author.js";


const updatePhoto = async (req, res, next) => {
    try {
        let author = req.body
        const authorExists = await Author.findById(itinerary._id)
        if (!authorExists) {
            return res.status(404).json({
                message: "author not found. Please try another ID."
            });
        }
        let upd = await Author.updateOne(
            { _id: author._id },
            { photo: author.photo }
        )

        if (upd) {
            return res.status(200).json({
                response: upd
            })
        }
    } catch (error) {
        next(error) 
    }
}


const update = async (req, res, next) => {
    try {
        let id = req.params.id
        const { ...dataToUpdate } = req.body;

        if (!id) {
            return res.status(400).json({
                success: false,
                message: "Author id is required",
            });
        }

        const updatedAuthor = await Author.findByIdAndUpdate(
            id,               
            dataToUpdate,     
            {
                new: true,      
                runValidators: true, 
            }
        );

    
        if (!updatedAuthor) {
            return res.status(404).json({
                success: false,
                message: "Author not found",
            });
        }

     
        res.status(200).json({
            success: true,
            message: "Author successfully updated",
            response: updatedAuthor,
        });
    } catch (error) {
        next(error);
    }
};






export {updatePhoto, update}