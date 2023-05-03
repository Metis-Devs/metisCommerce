import { Request, Response } from "express";
import { authService } from "../services/auth.service";
// import { send } from "process";

export const authController = {
    register: async(req:Request, res:Response)=>{
        try{
            const {firstname, lastname, idNumber, password, email} = req.body 
           
            await authService.doesItExist(email)
            const encryptedPassword = authService.encryptPassword(password)
            const user = await authService.createUser(firstname, lastname, idNumber, encryptedPassword, email)
            const token = authService.getToken(user.role)
            res.status(200).json({loginToken: token})


        }catch(err:any){
            res.status(500).json({msg: err.message})
        }


    },
    login: async(req:Request, res:Response)=>{
        try{
            const {password, email} = req.body 
            const user = await authService.findUser(email)
            authService.decryptPassword(password,user.password)
            const token = authService.getToken(user.role)

            res.status(200).json({loginToken: token})
        }catch(err:any){
            res.status(400).json({msg: err.message})
        }
    }
}