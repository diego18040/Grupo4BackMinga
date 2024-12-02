import Company from "../../models/Company.js";

const createCompany = async (req, res, next) => {
    try {
        // Extraemos todos los campos del body, incluyendo user_id
        const { name, description, photo, website, user_id } = req.body;

        // Creamos el objeto con los datos de la compañía
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
            message: "Company successfully registered",
            data: company
        });

    } catch (error) {
        next(error);
    }
};

export default createCompany;