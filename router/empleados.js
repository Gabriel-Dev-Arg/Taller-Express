import { Router } from "express";
import traerTodoLosEmpleados from "../controllers/empleados/read.js";
import empleadosPorNombre from "../controllers/empleados/nombre.js";
import empleadoPorCargo from "../controllers/empleados/cargo.js";
import { create } from "../controllers/empleados/create.js";

const router = Router();

// Endpoint para obtener todos los empleados
router.get("/",traerTodoLosEmpleados)

// Endpoint para obtener un empleado por nombre
//Ejemplo de ruta: localhost:8080/api/empleados/nombre/María García
router.get("/nombre/:nombre",empleadosPorNombre);

// Endpoint para obtener empleados por puesto
//Ejemplo de ruta: localhost:8080/api/empleados/cargo/Vendedor
router.get("/cargo/:cargo",empleadoPorCargo);

// Ejemplo de ruta: localhost:8080/api/empleados/crear
router.post("/crear", create);


export default router;
