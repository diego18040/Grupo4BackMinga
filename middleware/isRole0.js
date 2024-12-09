
import Company from "../models/Company.js";
import Author from "../models/Author.js";


export default (req, res, next) => {
    try {
        if (!req.user) {
            return res.status(401).json({
                success: false,
                message: "Unauthorized. User not logged in.",

            });
        }

        
     
        if (req.user.role == 0) {
            return res.status(403).json({
                success: false,
                message: `You don't have permission to access this info, consider being author or company.`,
            });
        }

        let author = Author.findOne({ user_id: req.user._id });
        let company = Company.findOne({ user_id: req.user._id });

        if (author.active || company.active) {
            return next();
        }

        return res.status(403).json({
            success: false,
            message: `seems like you were banned haha, contact the one in charge.`,
        });
        
    } catch (error) {
        next(error);
    }
    
};
