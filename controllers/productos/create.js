import Producto from "../../models/Producto.js"

const crearNuevoProducto = async (req, res) => {
    try {
        // Validamos si hay datos en el body
        if (!req.body) {
            return res.status(400).json({ message: "No se enviaron datos." });
        }

        // Extraemos la información del cuerpo de la solicitud
        const producto = req.body;

        // Creamos el nuevo producto
        const nuevoProducto = await Producto.create(producto);

        // Retornamos el resultado
        return res.status(201).json({
            response: nuevoProducto,
        });

    } catch (error) {
        // Retornamos un mensaje de error
        return res.status(500).json({
            message: "Error al crear el empleado.",
            error: error.message,
        });
    }
};


const crearMultiplesProductos =  async (req, res) => {
    try {
        if (!req.body || !Array.isArray(req.body)) {
            return res.status(400).json({ message: "No se enviaron datos o el formato es incorrecto." });
        }
        const productos = req.body;
        const nuevosProductos = await Producto.insertMany(productos);
        return res.status(201).json({
            response: nuevosProductos,
        });
    } catch (error) {
        return res.status(500).json({
            message: "Error al crear los productos.",
            error: error.message,
        });
    }
};
export {crearNuevoProducto,crearMultiplesProductos} //se exporta asi por que es una promesa