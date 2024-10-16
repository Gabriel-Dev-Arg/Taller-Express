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

export {crearNuevoProducto} //se exporta asi por que es una promesa