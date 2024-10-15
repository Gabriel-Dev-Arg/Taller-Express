import { response,Router } from "express";
import Empleado from "../models/Empleado.js"

const router = Router();

router.get("/",
    async (req,res) => {

        try {
            let empleados = await Empleado.find()
            return res.status(200).json(
                {
                    response: empleados
                }
            )
        } catch (error)  {
            return res.status(500).json({
                response: error
            })
            
        }

    }
)

export default router