const not_found_handler = (req, res, next) => {
    return res.status(404).json({
        success: false,
        message: "Oops! No encontramos la ruta solicitada.",
        description: "La URL que intentaste acceder no existe en nuestro servidor. Verifica el endpoint.",
        path: req.originalUrl, 
        method: req.method, 
        timestamp: new Date().toISOString() 
    });
};

export default not_found_handler;
