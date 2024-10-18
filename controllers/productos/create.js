import Producto from "../../models/Producto.js"

const crearNuevoProducto = async (req, res,next) => {
    try {
        // Extraemos la información del cuerpo de la solicitud
        const producto = req.body;

        // Creamos el nuevo producto
        const nuevoProducto = await Producto.create(producto);
        // Retornamos el resultado
        return res.status(201).json({
            response: nuevoProducto,
        });

    } catch (error) {
        next(error)
    }
};


const crearMultiplesProductos =  async (req, res,next) => {
    try {
        const productos = req.body;
        const nuevosProductos = await Producto.insertMany(productos);
        
        if (productos.length === 0) {
            const error = new Error('Tienda no encontrada');
            error.status = 400;
            throw error;
        }
        // status 201 , para dar un mensaje que fue creado
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