import jwt from 'jsonwebtoken'
import Author from '../models/Author.js'
import Company from '../models/Company.js'



export default async (req,res,next) => {

    try {
        
        let user = req.user
        
        let author = await Author.findOne({user_id: user._id})
        let company = await Company.findOne({user_id: user._id})
        
        let payload = {
            email: req.body.email || req.user.email,
            _id: user._id,
            role: user.role,
            author_id: author._id,
            company_id: company._id
        };
    
        const token = jwt.sign(
            payload,
            process.env.SECRET,
            {expiresIn: 60*60*24}
        )
        req.token = token
        return next()
    } catch (error) {
        return next(error)
    }

    
}