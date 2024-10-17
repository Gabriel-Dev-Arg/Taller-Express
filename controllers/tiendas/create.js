import Tienda from "../../models/Tienda.js"

const crearNuevaTienda = async (req,res,next) => {
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
        next(error)
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
    } catch (error)  {
        next(error)
    }
};
export {crearNuevaTienda,agregarVariasTiendas}