//controlador tipo get
import Tienda from "../../models/Tienda.js";

let traerTienda = async (req,res) => {
    try {
        let tienda = await Tienda.find()
        return res.status(202).json(
            {
                response: tienda
            }
        )
    } catch (error) {
        return res.status(500).json({
            response: error
        })
        
    }
}

export default traerTienda