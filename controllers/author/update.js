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

export {updatePhoto}