import Company from "../../models/Company.js";


const update = async (req,res,next)=>{
    try {
        const {id} = req.params;
        const updadeData = req.body;
        const company = await Company.findByIdAndUpdate(id,
        updadeData,
        {
            new: true,
            runValidators: true
        }
    ).populate("users");

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