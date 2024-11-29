const bad_request_handler = (err, req, res, next) => {
    if (err.name === 'ValidationError') {
        return res.status(400).json({
            success: false,
            message: `Bad Request: ${err.message}`
        });
    }

    next(err);
};

export default bad_request_handler;git 