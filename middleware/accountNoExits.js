import User from "../models/User.js";

export default async (req,res,next) => {
    try {
        let account = await User.findOne({email: req.body.email})
        if (account) {
            //guardamos la informacion del usuario en la variable req.user
            req.user ={
                email : account.email,
                password: account.password,
                name : account.name,
                photo : account.photo,
                country : account.country,
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