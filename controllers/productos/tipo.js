import Producto from "../../models/Producto.js";


let tipoDeProducto = async (req,res,next) => {
    const {tipo} = req.params;
    try {
        let productos = await Producto.find ( {tipo} )

        if (productos.length === 0) {
            const error = new Error('Tienda no encontrada');
            error.status = 404;
            throw error;
        }
        
        return res.status(200).json(
            {
                response: productos
            }
        )
    } catch (error)  {
        next(error)
    }
}

export default tipoDeProducto