//ejecucion 
import "dotenv/config.js"
//nos conectamos a la base de datos 
import "../../config/database.js"
//importamos el modelo
import Empleado from "../Empleado.js"

const empleadosData = [
    { nombre: "Juan Pérez", cargo: "Gerente", salario: 50000 },
    { nombre: "María García", cargo: "Supervisor", salario: 40000 },
    { nombre: "Carlos Rodríguez", cargo: "Vendedor", salario: 30000 },
    { nombre: "Ana Martínez", cargo: "Cajero", salario: 25000 },
    { nombre: "Luis González", cargo: "Almacenista", salario: 28000 },
    { nombre: "Elena Sánchez", cargo: "Servicio al Cliente", salario: 27000 },
    { nombre: "Pedro Ramírez", cargo: "Vendedor", salario: 30000 },
    { nombre: "Sofía Torres", cargo: "Cajero", salario: 25000 },
    { nombre: "Miguel Ángel López", cargo: "Supervisor", salario: 40000 },
    { nombre: "Laura Fernández", cargo: "Vendedor", salario: 30000 },
    { nombre: "Roberto Díaz", cargo: "Almacenista", salario: 28000 },
    { nombre: "Carmen Ruiz", cargo: "Servicio al Cliente", salario: 27000 },
    { nombre: "Javier Moreno", cargo: "Cajero", salario: 25000 },
    { nombre: "Isabel Jiménez", cargo: "Vendedor", salario: 30000 },
    { nombre: "Francisco Álvarez", cargo: "Supervisor", salario: 40000 }
  ];

  Empleado.insertMany(empleadosData)