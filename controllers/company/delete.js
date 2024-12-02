import Company from "../../models/Company.js";

const deleteCompany = async (req, res, next) => {	
    try {
        const { id } = req.params;

        const company = await Company.findByIdAndDelete(id);

        if (!company) {
            return res.status(404).json({
                sucess: false,
                message: "Company not found"
            })
        }

        return res.status(200).json({
            sucess: true,
            message: "Company deleted",
            data: company
        })
    } catch (error) {
        next(error);
    }
}

export default deleteCompany;