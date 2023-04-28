import { Request, Response } from "express";
import { authService } from "../services/auth.service";

export const authController = {
    register: async(req:Request, res:Response)=>{
        try{
            const {name, lastname, idNumber, password, email} = req.body 

            const encryptedPassword = authService.encryptPassword(password)
            const newUser = await authService.createUser(name, lastname, idNumber, encryptedPassword, email)

            res.status(200).json({msg: "Registrado con exito!"})


        }catch(err:any){
            res.status(500).json({msg: err.message})
        }


    },
    login: ()=>{

    }
}