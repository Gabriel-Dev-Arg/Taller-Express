//controlador tipo get
import Tienda from "../../models/Tienda.js";

let traerTienda = async (req,res,next) => {
    try {
        let tienda = await Tienda.find()
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