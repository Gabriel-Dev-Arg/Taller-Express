import Empleado from "../../models/Empleado.js";

let empleadosPorNombre =  async (req, res) => {
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
}

export default empleadosPorNombre