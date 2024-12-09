import Company from "../../models/Company.js";
import User from "../../models/User.js"; 
import generateToken from "../../middleware/generateToken.js";

const createCompany = async (req, res, next) => {
    try {
        const { name, description, photo, website, user_id } = req.body;
        await User.findByIdAndUpdate(
            user_id,
            { role: 2 },
            { new: true }  // hace que devuelva el documento actualizado
        );

        
        const companyData = {
            name,
            description,
            photo,
            user_id,        
            website: website || "",
            active: true
        };

        const company = await Company.create(companyData);
        req.user.role = 2
        console.log("esto es EL NUEVO req.user", req.user);
        const token = await generateToken(req, res, next, true);
        res.status(201).json({
            success: true,
            message: "Company successfully registered and user role updated",
            data: company,
            token: token,
            user: req.user

        });

    } catch (error) {
        next(error);
    }
};

export default createCompany;