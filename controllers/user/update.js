import User from "../../models/User.js"

const update = async (req, res, next) => {
    try {
        // Extraemos el id y los datos a actualizar del body
        let { user, ...dataToUpdate } = req.body;  // user es el ID, el resto son los datos a actualizar

        let updatedUser = await User.findByIdAndUpdate(
            user,  // usamos el id que viene en el body
            dataToUpdate,  // resto de datos a actualizar
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