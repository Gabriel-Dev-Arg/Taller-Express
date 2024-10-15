import { Schema, model } from "mongoose";

let collection = "productos";

let schema = new Schema({
    nombre: { type: String, required: true },
    marca: { type: String, required: true },
    tipo: { type: String, required: true },
    precio: { type: Number, required: true }
}, {
    timestamps: true
});

let Producto = model(collection, schema);

export default Producto;