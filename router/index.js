import { Router } from "express";
import productoRouter from "./productos.js"
import empleadoRouter from "./empleados.js"
import tiendaRouter from "./tienda.js"



const router = Router()

//utlizamos la ruta , le agregamos la ruta , y la ruta de productos
router.use("/productos",productoRouter)
router.use("/empleados", empleadoRouter)
router.use("/tiendas",tiendaRouter)




export default router
