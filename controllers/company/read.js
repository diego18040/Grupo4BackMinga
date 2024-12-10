import Company from "../../models/Company.js";

const allCompanies = async (req, res, next) => {
    try {
        let {name} = req.query
        let query = {}

        if (name) {
            query.name = {$regex: `${name}`, $options: "i"}
        }

        const companies = await Company.find(query)
            .populate('user_id');

        res.status(200).json({
            response: companies
        })
    } catch (error) {
        next(error);
    }
};

const getCompanyById = async (req, res, next) => {
    try {
        const { id } = req.params;

        let company = await Company.findOne({ user_id: id }).populate('user_id');
        if (!company) {
            return res.status(404).json({
                success: false,
                message: "Company not found",
            });
        }

        res.status(200).json({
            response: company
        });
    } catch (error) {
        next(error);
    }
};

const searchCompaniesByName = async (req, res, next) => {
    try {
        const { name } = req.params;
        const companies = await Company.find({
            name: { $regex: name, $options: "i" }
        }).populate('user_id');

        res.status(200).json({
            response: companies
        });
    } catch (error) {
        next(error);
    }
};


export { 
    allCompanies, 
    getCompanyById, 
    searchCompaniesByName, 
}