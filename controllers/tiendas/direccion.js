import Tienda from "../../models/Tienda.js";

let traerTiendaPorDireccion = async (req,res,next) =>{
    const {direccion} = req.params
    try {
        let tienda = await Tienda.find({direccion})
        // Si no encuentra la tienda, envía 404
        // Para utilizar el siguiente manejador de error
        if (tienda.length === 0) {
            const error = new Error('Tienda no encontrada');
            error.status = 404;
            throw error;
        }
        return res.status(200).json(
            {
                response: tienda
            }
        )
    } catch (error)  {
        next(error)
    }
}

export default traerTiendaPorDireccion