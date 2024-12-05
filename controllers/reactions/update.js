import Reaction from "../../models/Reactions.js";


const update = async (req, res, next) => {
    try {
        let reaction = req.body
        console.log("esto es el body", reaction);
        
        const reactionExists = await Reaction.findById(reaction._id)
        console.log("esto es reactionExists", reactionExists);
        
        if (!reactionExists) {
            return res.status(404).json({
                message: "Reaction not found. Please try another ID."
            });
        }
        let upd = await Reaction.updateOne(
            { _id: reaction._id },
            { reaction: reaction.reaction }
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


export {update}