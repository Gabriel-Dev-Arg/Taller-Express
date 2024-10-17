import Tienda from "../../models/Tienda.js";

let traerTiendaPorDireccion = async (req,res) =>{
    const {direccion} = req.params
    try {
        let tienda = await Tienda.find({direccion})
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