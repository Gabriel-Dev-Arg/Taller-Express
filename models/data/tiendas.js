//ejecucion
import "dotenv/config.js"
//nos conectamos a la base de datos
import "../../config/database.js"
//importamos el modelo
import Tienda from "../Tienda.js"

const tiendas = [
    { nombre: "Tienda La Esperanza", direccion: "Calle Falsa 123, Bogotá", telefono: 3112345678 },
    { nombre: "Supermercado Central", direccion: "Avenida Siempre Viva 742, Medellín", telefono: 3209876543 },
    { nombre: "Almacenes El Sol", direccion: "Carrera 50 No. 26-80, Cali", telefono: 3158765432 },
    { nombre: "Mercado del Norte", direccion: "Carrera 7 No. 45-90, Bucaramanga", telefono: 3106789123 },
    { nombre: "Distribuidora Sur", direccion: "Avenida 1 de Mayo No. 85-30, Cartagena", telefono: 3123456789 }
  ];

Tienda.insertMany(tiendas)