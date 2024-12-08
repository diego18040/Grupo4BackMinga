import Company from "../../models/Company.js";
import User from "../../models/User.js";
import Reaction from "../../models/Reactions.js";
import Comment from "../../models/Comments.js";

const deleteCompany = async (req, res, next) => {
    try {
        const { id } = req.params;

        // Buscar la compañía por ID
        const company = await Company.findById(id);

        if (!company) {
            return res.status(404).json({
                success: false,
                message: "Company not found",
            });
        }

        // Guardar el user_id antes de eliminar
        const userId = company.user_id;

        // Eliminar la compañía
        await Company.findByIdAndDelete(id);

        // Eliminar las reactions
        await Reaction.deleteMany({ company_id: id });

        await Comment.deleteMany({ company_id: id });

        // Actualizar el rol del usuario
        const user = await User.findById(userId);
        if (user) {
            user.role = 0;
            await user.save();
        }

        return res.status(200).json({
            success: true,
            message: "Company deleted and user role updated to 0",
            data: company,
        });
    } catch (error) {
        next(error);
    }
};

export default deleteCompany;
