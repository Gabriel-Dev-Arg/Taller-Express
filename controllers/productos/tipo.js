import Producto from "../../models/Producto.js";


let tipoDeProducto = async (req,res) => {
    const {tipo} = req.params;
    try {
        let productos = await Producto.find ( {tipo} )
        return res.status(200).json(
            {
                response: productos
            }
        )
    } catch (error) {
        return res.status(500).json({
            response: error
        });
    }
}

export default tipoDeProducto