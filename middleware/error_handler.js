const error_handler = (err, req, res, next) => {
    console.error('Error:', err);

    if ((err.name === 'CastError' || err.name === 'ValidationError') && 
        err.value && err.value.length <= 24) { 
        return res.status(400).json({
            success: false,
            message: `Bad Request: ID inválido o datos incorrectos`
        });
    }

    return res.status(500).json({
        success: false,
        message: `Error interno del servidor en la ruta ${req.originalUrl}`
    });
};

export default error_handler;