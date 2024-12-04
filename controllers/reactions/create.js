import Reaction from "../../models/Reactions.js";


let create = async (req,res,next) =>{
    try {
        let reaction = req.body

        
        let newReaction = await Reaction.create(reaction)
        return res.status(201).json({
            response: newReaction
        })
    } catch (error) {
        next(error)
    }
}


export {create}