import { Router } from "express";
import Empleado from "../models/Empleado.js";

const router = Router();

// Endpoint para obtener todos los empleados
router.get("/", async (req, res) => {
    try {
        let empleados = await Empleado.find();
        return res.status(200).json({
            response: empleados,
        });
    } catch (error) {
        return res.status(500).json({
            response: error,
        });
    }
});

// Endpoint para obtener un empleado por nombre
//localhost:8080/api/empleados/nombre/María García
router.get("/nombre/:nombre", async (req, res) => {
    //la respuesta donde viene la informacion
    const { nombre } = req.params;
    try {
        let empleado = await Empleado.findOne({ nombre });
        if (!empleado) {
            return res.status(404).json({
                response: `No se encontró un empleado con el nombre ${nombre}`,
            });
        }
        return res.status(200).json({
            response: empleado,
        });
    } catch (error) {
        return res.status(500).json({
            response: error,
        });
    }
});

// Endpoint para obtener empleados por puesto
//localhost:8080/api/empleados/cargo/Vendedor
router.get("/cargo/:cargo", async (req, res) => {
    const { cargo } = req.params;
    try {
        let empleados = await Empleado.find({ cargo });
        return res.status(200).json({
            response: empleados,
        });
    } catch (error) {
        return res.status(500).json({
            response: error,
        });
    }
});

export default router;
