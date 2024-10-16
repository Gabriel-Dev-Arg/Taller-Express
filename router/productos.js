//importamos la propiedad Router de Express
import { response,Router } from "express";
import Producto from "../models/Producto.js";

//utlizamos Router y la ejecutamos.
const router = Router()
//recibe 2 parametro , la funcion que va a ejecutar despues de poner "/all"
router.get("/",
    //funcion anonima
    //peticion y respuesta  
    //pregunta
   async (req,res) => {
        try {
            //consulta a la base de dato
            let productos = await Producto.find()
            //res es un objeto y damos el ok y lo pasamos a json
            //respuesta de la base de datos.
            return res.status(200).json({
                //despues que lo pasamos a json , damos la respuesta al cliente con el nombre de la consulta productos.
                response: productos
                
            } )
            
        } catch (error) {
            return res.status(500).json({
                response: error
            })
            
        }
    }
)
//localhost:8080/api/productos/marca/Sony
//Endpoint para obtener los nombres de las marcas
router.get("/marca/:marca", async (req,res) =>{
    const { marca } = req.params;
    try {
        let productos = await Producto.find( {marca} );
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

})

//Endpoint para obtener los nombres de las tipo de producto
//localhost:8080/api/productos/tipo/Electrónica

router.get("/tipo/:tipo", async (req,res) => {
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
})
export default router