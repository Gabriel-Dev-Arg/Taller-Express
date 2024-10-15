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

export default router