const error_handler = (error, req, res, next) => {
    console.error('Error:', error);

    return res.status(500).json({
        success: false,
        message: "Error interno del servidor. Por favor, inténtelo más tarde.", 
        error: error.message || "Ocurrió un error inesperado", 
        ruta: req.originalUrl, 
        método: req.method, 
        timestamp: new Date().toISOString() 
    });
};

export default error_handler;
