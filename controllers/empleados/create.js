import Empleado from "../../models/Empleado.js";

const create = async (req, res) => {
    try {
        // Validamos si hay datos en el body
        if (!req.body) {
            return res.status(400).json({ message: "No se enviaron datos." });
        }

        // Extraemos la información del cuerpo de la solicitud
        const empleado = req.body;

        // Creamos el nuevo empleado
        const nuevoEmpleado = await Empleado.create(empleado);

        // Retornamos el resultado
        return res.status(201).json({
            response: nuevoEmpleado,
        });

    } catch (error) {
        // Retornamos un mensaje de error
        return res.status(500).json({
            message: "Error al crear el empleado.",
            error: error.message,
        });
    }
};

export {create} //se exporta asi por que es una promesa