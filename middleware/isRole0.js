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


        return next();
    } catch (error) {
        next(error);
    }
    
};
