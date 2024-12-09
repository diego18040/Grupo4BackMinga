import bcryptjs from 'bcryptjs'

//hasheamos la contraseña
export default (req,res,next) => {
    console.log("esto es req.body", req.body);
    
    let passwordBody = req.body.password
    //guardamos la contraseña en la variable req.user.password
    let passwordDB = req.user.password
    //comparamos la contraseña
    let compare = bcryptjs.compareSync(
        passwordBody,
        passwordDB
    )
    //sii es true , siguiente validacion , si no, error
    if (compare) {
        delete req.body.password
        return next()
    }
    return res.status(400).json({
        success: false,
        message: "Invalid Credencials"
    })
}