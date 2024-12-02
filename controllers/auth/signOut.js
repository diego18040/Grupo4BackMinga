import User from "../../models/User.js";

export default async (req, res, next) => {
    try {
        if (!req.user?._id) {
            return res.status(401).json({
                success: false,
                message: "User not authenticated"
            });
        }

        const updatedUser = await User.findByIdAndUpdate(
            req.user._id,
            { online: false },
            { new: true } // Para devolver el documento actualizado
        );

        if (!updatedUser) {
            return res.status(404).json({
                success: false,
                message: "User not found"
            });
        }

        console.log(`User ${updatedUser.email} logged out successfully`);
        
        return res.status(200).json({
            success: true,
            message: "Logged out successfully"
        });

    } catch (error) {
        console.error("Logout error:", error);
        next(error);
    }
}