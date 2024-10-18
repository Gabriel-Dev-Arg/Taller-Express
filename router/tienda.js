import { response,Router } from "express";
import traerTienda from "../controllers/tiendas/read.js";
import traerTiendaPorNombre from "../controllers/tiendas/nombre.js";
import traerTiendaPorDireccion from "../controllers/tiendas/direccion.js";
import { crearNuevaTienda,agregarVariasTiendas } from "../controllers/tiendas/create.js";

const router = Router()
//Endpoint trae todas las tiendas
//Ejemplo de ruta: localhost:8080/api/tiendas
router.get("/",traerTienda)

//Endpoint para obtener los nombres de las tiendas
//Ejemplo de ruta: localhost:8080/api/tiendas/nombre/Distribuidora Sur
router.get("/nombre/:nombre",traerTiendaPorNombre )

//Endpoint para obtener las direcciones
//Ejemplo de ruta: localhost:8080/api/tiendas/direccion/Calle Falsa 123, Bogotá
router.get("/direccion/:direccion",traerTiendaPorDireccion)

//Ejemplo de ruta Multiple: localhost:8080/api/tiendas/crear
router.post("/crear",crearNuevaTienda)

//Ejemplo de ruta Multiple: localhost:8080/api/tiendas/crearTiendas
router.post("/crearTiendas",agregarVariasTiendas)

export default router