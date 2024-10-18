import Empleado from "../../models/Empleado.js";

let empleadoPorCargo =  async (req,res,next) => {
    const { cargo } = req.params;
    try {
        let empleados = await Empleado.find({ cargo });

        if (empleados.length === 0) {
            const error = new Error('Tienda no encontrada');
            error.status = 404;
            throw error;
        }

        return res.status(200).json({
            response: empleados,
        });
    } catch (error) {
        next(error)
    }
}

export default empleadoPorCargo