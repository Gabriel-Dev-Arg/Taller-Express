// importamos mongoose
import mongoose from "mongoose";

let url = process.env.URI_MONGO
//conectamos la url con mongo
//nos conectamos a la bases de datos


//hacemos un fetch
/* .then(() => console.log("la base de datos esta contectada")
)
.catch(error => console.log(error)); */

async function conectBasesDatos() {
    //para atrapar errores . try y catch
    try {
     await mongoose.connect(process.env.URI_MONGO)
        console.log("Base de datos conectada");
    } catch (error) {
        console.log(error);
        
    }
}

conectBasesDatos()