import jwt from 'jsonwebtoken'
import Author from '../models/Author.js'
import Company from '../models/Company.js'



export default async (req,res,next) => {

    try {
        
        let user = req.user
        
        let author = await Author.findOne({user_id: user._id})
        let company = await Company.findOne({user_id: user._id})

        let creator_id = 234

        if (author) {
            creator_id = author._id; 
        } else if (company) {
            creator_id = company._id; 
        }
        
        let payload = {
            email: req.body.email || req.user.email,
            _id: user._id,
            role: user.role,
            creator_id: creator_id,
            author_id: user.author_id,
            company_id: user.company_id
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