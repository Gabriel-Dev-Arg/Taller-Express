const bad_request_handler = (err, req, res, next) => {
    console.log(err);
    return res.status(400).json({
        success: false,
        message: `Bad Request: ${err.message}`
    });
};

export default bad_request_handler;
