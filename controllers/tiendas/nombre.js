import Tienda from "../../models/Tienda.js";

let traerTiendaPorNombre = async (req, res, next) => {
    try {
        const { nombre } = req.params;
        let tienda = await Tienda.find({ nombre });

        // Si no encuentra la tienda, envía 404
        // Para utilizar el siguiente manejador de error
        if (tienda.length === 0) {
            const error = new Error('Tienda no encontrada');
            error.status = 404;
            throw error;
        }

        return res.status(200).json({
            success: true,
            response: tienda
        });
        
    } catch (error) {
        next(error);
    }
}

export default traerTiendaPorNombre;