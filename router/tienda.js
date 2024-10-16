import { response,Router } from "express";
import Tienda from "../models/Tienda.js"

const router = Router()

router.get("/",
    async (req,res) => {
        try {
            let tienda = await Tienda.find()
            return res.status(202).json(
                {
                    response: tienda
                }
            )
        } catch (error) {
            return res.status(500).json({
                response: error
            })
            
        }
    }

)

//Endpoint para obtener los nombres de las tiendas
//localhost:8080/api/tiendas/nombre/Distribuidora Sur
router.get("/nombre/:nombre", async (req,res) => {
    const { nombre } = req.params;
    try {
        let tienda = await Tienda.find( {nombre} )
        return res.status(200).json(
            {
                response: tienda
            }
        )
    } catch (error) {
        return res.status(500).json({
            response: error
        });
    }

})
//Endpoint para obtener las direcciones
//localhost:8080/api/tiendas/direccion/Calle Falsa 123, Bogotá
router.get("/direccion/:direccion", async (req,res) =>{
    const {direccion} = req.params
    try {
        let tienda = await Tienda.find({direccion})
        return res.status(200).json(
            {
                response: tienda
            }
        )
    } catch (error) {
        return res.status(500).json({
            response: error
        });
    }
})

export default router