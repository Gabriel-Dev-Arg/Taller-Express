import express from "express";
import "dotenv/config.js";
import "./config/database.js"
import cors from "cors"
import morgan from "morgan";
import indexRouter from "./router/index.js"
import not_found_handler from "./middleware/not_found_handler.js"
import error_handler from "./middleware/error_handler.js";


// utilizamos espress
const server = express()

//traemos el puerto 8080
const PORT = process.env.PORT || 8080

//
const ready = () => console.log("Server Listo :"+PORT);

//peticiones y respuestas en json
server.use(express.json())
//funcion para dar el ok en mas parametros
server.use(express.urlencoded({extended:true}))
//cors para que la aplicacion sea estricta
server.use(cors())
//registro de peticiones 
server.use(morgan("dev"))

//router 
//cuando alguien ejecuto /api , traeme lo que tengan en indexRouter
server.use("/api",indexRouter)
server.use(not_found_handler)
server.use(error_handler)
//levantamos el servidor 
server.listen(PORT,ready)




