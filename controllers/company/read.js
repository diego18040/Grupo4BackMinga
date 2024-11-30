import Company from "../../models/Company.js";

const allCompanies = async (req, res, next) => {
    try {

        let {name} = req.query
        let query = {}

        if (name) {
            query.name = {$regex: `${name}`, $options: "i"}
        }

        const companies = await Company.find(query);
        res.status(200).json({
            response: companies
        })
    } catch (error) {
        next(error);
    }
};




export {allCompanies}