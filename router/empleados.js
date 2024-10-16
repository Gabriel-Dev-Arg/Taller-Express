import { Router } from "express";
import Empleado from "../models/Empleado.js";

const router = Router();

// Endpoint para obtener todos los empleados
router.get("/", async (req, res) => {
    try {
        let empleados = await Empleado.find();
        return res.status(200).json({
            response: empleados
        });
    } catch (error) {
        return res.status(500).json({
            response: error
        });
    }
});

// Endpoint para obtener un empleado por nombre
router.get("/nombre/:nombre", async (req, res) => {
    const { nombre } = req.params;
    try {
        let empleado = await Empleado.findOne({ nombre });
        if (!empleado) {
            return res.status(404).json({
                response: `No se encontró un empleado con el nombre ${nombre}`
            });
        }
        return res.status(200).json({
            response: empleado
        });
    } catch (error) {
        return res.status(500).json({
            response: error
        });
    }
});

// Endpoint para obtener empleados por puesto
router.get("/puesto/:puesto", async (req, res) => {
    const { puesto } = req.params;
    try {
        let empleados = await Empleado.find({ puesto });
        if (empleados.length === 0) {
            return res.status(404).json({
                response: `No se encontraron empleados con el puesto ${puesto}`
            });
        }
        return res.status(200).json({
            response: empleados
        });
    } catch (error) {
        return res.status(500).json({
            response: error
        });
    }
});

export default router;
