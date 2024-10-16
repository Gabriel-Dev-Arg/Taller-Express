import { response,Router } from "express";
import traerTienda from "../controllers/tiendas/read.js";
import traerTiendaPorNombre from "../controllers/tiendas/nombre.js";
import traerTiendaPorDireccion from "../controllers/tiendas/direccion.js";

const router = Router()

router.get("/",traerTienda)

//Endpoint para obtener los nombres de las tiendas
//localhost:8080/api/tiendas/nombre/Distribuidora Sur
router.get("/nombre/:nombre",traerTiendaPorNombre )

//Endpoint para obtener las direcciones
//localhost:8080/api/tiendas/direccion/Calle Falsa 123, Bogotá
router.get("/direccion/:direccion",traerTiendaPorDireccion)

export default router