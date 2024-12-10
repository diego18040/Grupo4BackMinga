import Company from "../../models/Company.js";


const update = async (req,res,next)=>{
    try {
        let {id} = req.params;
        const updadeData = req.body;
        let companyid = await Company.findOne({user_id: id});
        if(!companyid){
            return res.status(404).json({
                sucess: false,
                message: "Company not found"
            })
        }

        id = companyid._id

        const company = await Company.findByIdAndUpdate(id,
        updadeData,
        {
            new: true,
            runValidators: true
        }
    ).populate("user_id");

    if(!company){
        return res.status(404).json({
            sucess: false,
            message: "Company not found"
        })
    }

    return res.status(200).json({
        sucess: true,
        message: "Company updated",
        data: company
    })
    } catch (error) {
        return next(error);
    }
} 

export default update;