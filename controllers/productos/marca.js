import Producto from "../../models/Producto.js";

let traerLasMarcas =  async (req,res) =>{
    const { marca } = req.params;
    try {
        let productos = await Producto.find( {marca} );
        return res.status(200).json(
            {
                response: productos
            }
        )
    } catch (error)  {
        next(error)
    }

}

export default traerLasMarcas