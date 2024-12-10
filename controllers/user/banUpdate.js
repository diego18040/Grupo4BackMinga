import User from "../../models/User.js";
import Company from "../../models/Company.js";
import Author from "../../models/Author.js";


const banUpdate = async (req, res, next) => {
    try {
        let id = req.params.id;

        let author = await Author.findOne({ user_id: id });
        let company = await Company.findOne({ user_id: id });
        if (req.user.role !== 3) {
            return res.status(403).json({
                success: false,
                message: "You don't have permission execute this action",
            });
        }

        if (author) {
            author.active = !author.active;
            await author.save();
            return res.status(200).json({
                success: true,
                message: `author active status changed to ${author.active}`,
                author: author
            })
        } else if (company) {
            company.active = !company.active;
            await company.save();
            return res.status(200).json({
                success: true,
                message: `company active status changed to ${company.active}`,
                company: company
            })
        } else {
            return res.status(404).json({
                success: false,
                message: "company or user not found",
            });
        }

    } catch (error) {
        next(error);
    }
}

export default banUpdate