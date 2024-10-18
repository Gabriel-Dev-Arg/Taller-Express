import Producto from "../../models/Producto.js";

let traerLasMarcas =  async (req,res,next) =>{
    const { marca } = req.params;
    try {
        //consulta a la base de dato
        let productos = await Producto.find( {marca} );

        if (productos.length === 0) {
            const error = new Error('Tienda no encontrada');
            error.status = 404;
            throw error;
        }
         //res es un objeto y damos el ok y lo pasamos a json
        //respuesta de la base de datos.
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