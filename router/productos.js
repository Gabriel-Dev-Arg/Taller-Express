//importamos la propiedad Router de Express
import { response,Router } from "express";
import Producto from "../models/Producto.js";
import traerTodosLosProductos from "../controllers/productos/read.js";
import traerLasMarcas from "../controllers/productos/marca.js";
import tipoDeProducto from "../controllers/productos/tipo.js";

//utlizamos Router y la ejecutamos.
const router = Router()
//recibe 2 parametro , la funcion que va a ejecutar despues de poner "/all"
router.get("/",traerTodosLosProductos
)
//localhost:8080/api/productos/marca/Sony
//Endpoint para obtener los nombres de las marcas
router.get("/marca/:marca",traerLasMarcas)

//Endpoint para obtener los nombres de las tipo de producto
//localhost:8080/api/productos/tipo/Electrónica
router.get("/tipo/:tipo", tipoDeProducto)

export default router