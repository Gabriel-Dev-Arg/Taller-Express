import Producto from "../../models/Producto.js";

//funcion anonima
//peticion y respuesta  
//pregunta
let traerTodosLosProductos = async (req,res) => {
    try {
        //consulta a la base de dato
        let productos = await Producto.find()
        
        if (productos.length === 0) {
            const error = new Error('Tienda no encontrada');
            error.status = 404;
            throw error;
        }
        //res es un objeto y damos el ok y lo pasamos a json
        //respuesta de la base de datos.
        return res.status(200).json({
            //despues que lo pasamos a json , damos la respuesta al cliente con el nombre de la consulta productos.
            response: productos
            
        } )
        
    } catch (error)  {
        next(error)
    }
}

export default traerTodosLosProductos