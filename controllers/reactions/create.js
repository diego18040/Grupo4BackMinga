import Reaction from "../../models/Reactions.js";
import User from "../../models/User.js";
import Author from "../../models/Author.js";
import Company from "../../models/Company.js";






let create = async (req, res, next) => {
    try {
        let { manga_id, reaction } = req.body;
        let  id  = req.query.id;

        let author = await Author.findOne({ user_id: id }); 
        let company = await Company.findOne({ user_id: id }); 
        
        console.log("esto es id ", id);
        console.log("esto es manga_id", manga_id);
        
        

        console.log("esto es author", author);  

        

        
        if (!author && !company) {
            return res.status(400).json({
                success: false,
                message: "User must be either an author or a company to react",
            });
        }



  
        const existingReaction = await Reaction.findOne({
            manga_id,
            $or: [
                { author_id: author ? author._id : null },
                { company_id: company ? company._id : null },
            ],
        });

        console.log(existingReaction);
        

        if (existingReaction) {
            if (existingReaction.reaction === reaction) {
                return res.status(200).json({
                    success: false,
                    message: "You have already reacted like this",
                });
            } else {
       
                existingReaction.reaction = reaction;
                await existingReaction.save();

                return res.status(200).json({
                    success: true,
                    message: "Reaction updated successfully",
                    response: existingReaction,
                });
            }
        }

      
        const newReaction = await Reaction.create({
            manga_id,
            reaction,
            author_id: author ? author._id : undefined, 
            company_id: company ? company._id : undefined, 
        });

        return res.status(201).json({
            success: true,
            message: "Reaction created successfully",
            response: newReaction,
        });

    } catch (error) {
        next(error);
    }
};


export {create}