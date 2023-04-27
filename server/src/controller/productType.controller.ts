import { Request, Response } from "express";
import { productTypeService } from "../services/productType.service";


export const productTypeController = {
    createProductType: async (req:Request, res:Response) => {
        try{
            const name = req.body.name

            const productType = await productTypeService.create(name)

            res.status(200).send(productType)
        }catch(err:any){
            res.status(500).send(err.message)

        }
    },
    getAllProductTypes: async (_req:Request, res:Response) => {
        try{
           
            const productType = await productTypeService.getAll()

            res.status(200).send(productType)
        }catch(err:any){
            res.status(500).send(err.message)

        }
    },
    updateProductType:  async (req:Request, res:Response) => {
        try{
            const {id,name} = req.body
            const productType = await productTypeService.update(+id, name)

            res.status(200).send(productType)
        }catch(err:any){
            res.status(500).send(err.message)

        }
    },
    deleteProductType:  async (req:Request, res:Response) => {
        try{
            const id = req.params.id
            await productTypeService.delete(+id)

            res.status(200).send("Se elimino con exito")
        }catch(err:any){
            res.status(500).send(err.message)

        }
    },
}