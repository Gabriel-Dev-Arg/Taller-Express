import Empleado from "../../models/Empleado.js";

let empleadosPorNombre =  async (req, res,next) => {
    //la respuesta donde viene la informacion
    const { nombre } = req.params;
    try {
        let empleados = await Empleado.find({ nombre });
        if (empleados.length === 0) {
            const error = new Error('Tienda no encontrada');
            error.status = 404;
            throw error;
        }
        return res.status(200).json({
            response: empleados,
        });
    } catch (error)  {
        next(error)
    }
}

export default empleadosPorNombre