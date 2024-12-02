import Company from "../../models/Company.js";
import User from "../../models/User.js"; 

const createCompany = async (req, res, next) => {
    try {
        const { name, description, photo, website, user_id } = req.body;
        await User.findByIdAndUpdate(
            user_id,
            { role: 2 },
            { new: true }  // hace que devuelva el documento actualizado
        );

        // creamos la compañía
        const companyData = {
            name,
            description,
            photo,
            user_id,        
            website: website || "",
            active: true
        };

        const company = await Company.create(companyData);

        res.status(201).json({
            success: true,
            message: "Company successfully registered and user role updated",
            data: company
        });

    } catch (error) {
        // Si hay un error, podríamos querer revertir el cambio de rol
        // en un entorno de producción
        next(error);
    }
};

export default createCompany;