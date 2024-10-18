import express from "express";
import "dotenv/config.js";
// Conexion con la base de datos
import "./config/database.js"
// Middleware para permitir solicitudes desde otros dominios.
import cors from "cors"
// Middleware para registrar las solicitudes HTTP en el servidor.
import morgan from "morgan";
// Enrutador principal
import indexRouter from "./router/index.js"
// Middleware manejador de errores 404
import not_found_handler from "./middleware/not_found_handler.js"
// Middleware manejador de errores 500
import error_handler from "./middleware/error_handler.js";
// Middleware manejador de errores 400
import bad_request_handler from "./middleware/bad_request_handler.js";


// Utilizamos espress
const server = express()

// Traemos el puerto 8080
const PORT = process.env.PORT || 8080

//
const ready = () => console.log("Server Listo :"+PORT);

// Peticiones y respuestas en json
server.use(express.json())
// Funcion para dar el ok en mas parametros
server.use(express.urlencoded({extended:true}))
// Cors para que la aplicacion sea estricta
server.use(cors())
// Registro de peticiones 
server.use(morgan("dev"))

//Router 
//Cuando alguien ejecuto /api , traeme lo que tengan en indexRouter
server.use("/api",indexRouter)

//Middleware 404
server.use(not_found_handler)
//Middleware 400
server.use(bad_request_handler)
//Middleware 500
server.use(error_handler)
//Levantamos el servidor 
server.listen(PORT,ready)




