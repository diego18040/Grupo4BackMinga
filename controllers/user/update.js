import User from "../../models/User.js"

const update = async (req, res, next) => {
    try {
        let id = req.params.id
        let {  ...dataToUpdate } = req.body;  // user es el ID, el resto son los datos a actualizar

        console.log("esto es dataToUpdate", dataToUpdate);
        console.log("esto es id", id);
        

        

        let updatedUser = await User.findByIdAndUpdate(
            id,  // usamos el id que viene en el body
            dataToUpdate,  
            {
                new: true,
                runValidators: true
            }
        );

        if (!updatedUser) {
            return res.status(404).json({
                success: false,
                message: "User Not Found"
            });
        }

        return res.status(200).json({
            success: true,
            message: "User Successfully Updated",
            response: updatedUser
        });

    } catch (error) {
        next(error);
    }
}

export default update;