//controlador tipo get
import Tienda from "../../models/Tienda.js";

let traerTienda = async (req,res,next) => {
    try {
        let tienda = await Tienda.find()
        // Si no encuentra la tienda, envía 404
        // Para utilizar el siguiente manejador de error
        if (tienda.length === 0) {
            const error = new Error('Tienda no encontrada');
            error.status = 404;
            throw error;
        }
        
        return res.status(202).json(
            {
                response: tienda
            }
        )
    } catch (error) {
        next(error)
    }
}

export default traerTienda