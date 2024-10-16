import Tienda from "../../models/Tienda.js";

let traerTiendaPorNombre = async (req,res) => {
    const { nombre } = req.params;
    try {
        let tienda = await Tienda.find( {nombre} )
        return res.status(200).json(
            {
                response: tienda
            }
        )
    } catch (error) {
        return res.status(500).json({
            response: error
        });
    }

}

export default traerTiendaPorNombre