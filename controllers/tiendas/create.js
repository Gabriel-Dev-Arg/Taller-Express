import Tienda from "../../models/Tienda.js"

const crearNuevaTienda = async (req,res) => {
    try {
        // Validamos si hay datos en el body
        if (!req.body) {
            return res.status(400).json({ message: "No se enviaron datos." });
        }
        // Extraemos la información del cuerpo de la solicitud
        const tienda = req.body;
        // Creamos nueva tienda
        const neuvaTienda = await Tienda.create(tienda);
         // Retornamos el resultado
         return res.status(201).json({
            response: neuvaTienda,
        });

    } catch (error) {
        // Retornamos un mensaje de error
        return res.status(500).json({
            message: "Error al crear el empleado.",
            error: error.message,
        });
    }
}

const agregarVariasTiendas = async (req, res) => {
    try {
        if (!req.body || !Array.isArray(req.body)) {
            return res.status(400).json({ message: "No se enviaron datos o el formato es incorrecto." });
        }
        const tiendas = req.body;
        const multiplesTiendas = await Tienda.insertMany(tiendas);
        return res.status(201).json({
            response: multiplesTiendas,
        });
    } catch (error) {
        return res.status(500).json({
            message: "Error al crear los productos.",
            error: error.message,
        });
    }
};
export {crearNuevaTienda,agregarVariasTiendas}