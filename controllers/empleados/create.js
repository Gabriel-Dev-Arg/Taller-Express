import Empleado from "../../models/Empleado.js";

const create = async (req, res,next) => {
    try {
        // Extraemos la información del cuerpo de la solicitud
        const empleado = req.body;

        // Creamos el nuevo empleado
        const nuevoEmpleado = await Empleado.create(empleado);

        // Retornamos el resultado
        return res.status(201).json({
            response: nuevoEmpleado,
        });

    } catch (error) {
        next(error)
    }
};

const crearNuevosEmpleados = async (req, res) => {
    try {
        const empleados = req.body;
        const nuevosEmpleados = await Empleado.insertMany(empleados);
        return res.status(201).json({
            response: nuevosEmpleados,
        });
    } catch (error) {
        return res.status(500).json({
            message: "Error al crear los productos.",
            error: error.message,
        });
    }
};
export {create,crearNuevosEmpleados} //se exporta asi por que es una promesa