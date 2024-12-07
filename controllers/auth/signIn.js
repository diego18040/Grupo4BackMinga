import User from "../../models/User.js";

export default async(req,res,next) => {
    try {
        const updatedUser = await User.findOneAndUpdate(
            {email: req.body.email},
            {online: true},
            {
                new: true,
                select: 'email firstName lastName photo country online role'
            }
        );
        console.log(updatedUser);
        
        console.log(`User ${updatedUser.email} signed in successfully`);
        return res.status(200).json({
            success: true,
            message: "signed In",
            user: {
                email: updatedUser.email,
                photo: updatedUser.photo || '',
                role: updatedUser.role,
                _id: updatedUser._id
            },
            token: req.token
        })

    } catch (error) {
       next(error) 
    }
}