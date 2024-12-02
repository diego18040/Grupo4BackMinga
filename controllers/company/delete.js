import Company from "../../models/Company.js";
import User from "../../models/User.js";

// recordar cambiar el rol del usuario a 0

const deleteCompany = async (req, res, next) => {
    try {
        const { id } = req.params;

        // Buscar la compañía por ID
        const company = await Company.findById(id);

        if (!company) {
            return res.status(404).json({
                success: false,
                message: "Company not found"
            });
        }

        // usuario asociado a la compañía
        const userId = company.user_id; 
        const user = await User.findById(userId);

        if (user) {
            // Actualiza el rol del usuario a 0
            user.role = 0;
            await user.save();
        }

        // Eliminar la compañía
        await Company.findByIdAndDelete(id);

        return res.status(200).json({
            success: true,
            message: "Company deleted, user role updated to 0",
            data: company
        });
    } catch (error) {
        next(error);
    }
};

export default deleteCompany;
