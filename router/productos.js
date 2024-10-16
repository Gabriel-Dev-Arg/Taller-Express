// Importamos la propiedad Router de Express
import { Router } from "express";
import traerTodosLosProductos from "../controllers/productos/read.js";
import traerLasMarcas from "../controllers/productos/marca.js";
import tipoDeProducto from "../controllers/productos/tipo.js";
import {crearNuevoProducto} from "../controllers/productos/create.js"


// Utilizamos Router y lo ejecutamos
const router = Router();

// Ruta para obtener todos los productos
router.get("/", traerTodosLosProductos);

// Endpoint para obtener los nombres de las marcas
// Ejemplo de ruta: localhost:8080/api/productos/marca/Sony
router.get("/marca/:marca", traerLasMarcas);

// Endpoint para obtener los tipos de productos
// Ejemplo de ruta: localhost:8080/api/productos/tipo/Electrónica
router.get("/tipo/:tipo", tipoDeProducto);

// Ejemplo de ruta: localhost:8080/api/productos/crear
router.post("/crear", crearNuevoProducto);



export default router;
