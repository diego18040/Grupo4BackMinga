import Reaction from "../../models/Reactions.js";


const allReactions = async (req, res, next) => {
    try {
        const reactions = await Reaction.find()
            .populate('author_id')
            .populate('company_id')
            .populate('manga_id', "_id title");


        console.log(req.user);
        

        res.status(200).json({
            response: reactions
        });

    } catch (error) {
        next(error);
    }
};



export { allReactions };