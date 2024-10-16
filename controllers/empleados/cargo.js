import Empleado from "../../models/Empleado.js";

let empleadoPorCargo =  async (req, res) => {
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
}

export default empleadoPorCargo