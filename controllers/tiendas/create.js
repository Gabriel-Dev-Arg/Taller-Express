import Tienda from "../../models/Tienda.js"

const crearNuevaTienda = async (req,res,next) => {
    try {
        // Extraemos la información del cuerpo de la solicitud
        const tienda = req.body;
        // Creamos nueva tienda
        const neuvaTienda = await Tienda.create(tienda);
         // Retornamos el resultado
        return res.status(201).json({
            response: neuvaTienda,
        });
        //Retornamos error 400
    } catch (error) {
        next(error)
    }
}

const agregarVariasTiendas = async (req, res,next) => {
    try {
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