import User from "../models/User.js";
import Author from "../models/Author.js";
import Company from "../models/Company.js";

export default async (req,res,next) => {
    try {
        let account = await User.findOne({email: req.body.email})

        let author = await Author.findOne({user_id: account._id})
        let company = await Company.findOne({user_id: account._id})

        if (account) {
            //guardamos la informacion del usuario en la variable req.user
            req.user ={
                email : account.email,
                password: account.password,
                name : account.name,
                photo : account.photo,
                role : account.role,
                _id : account._id,
                author_id : author._id,
                company_id : company._id
            }
            return next()
        }
        return res.status(400).json({
            success: false,
            message: "User does not exits"
        })      
    } catch (error) {
        next(error)
    }
}