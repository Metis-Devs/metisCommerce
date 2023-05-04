import { Request, Response } from "express";
import { productService } from "../services/product.service";


export const productController = {
    createProduct: async (req: Request, res: Response) => {
        try {
            const { name, price, description, stock, productTypes, user } = req.body

            const image: string = req.file?.path || ""

            const productType = await productService.create(name, price, description, image, stock, productTypes, user)

            res.status(200).send(productType)
        } catch (err: any) {
            res.status(500).send(err.message)

        }
    },
    getAllProducts: async (_req: Request, res: Response) => {
        try {

            const productType = await productService.getAll()

            res.status(200).send(productType)
        } catch (err: any) {
            res.status(500).send(err.message)

        }
    },
    updateProduct: async (req: Request, res: Response) => {
        try {
            const { id, name, price, description, stock, productTypes } = req.body
            const image: string = req.file?.path || ""
            const productType = await productService.update(+id, name, price, description, image, stock, productTypes)

            res.status(200).send(productType)
        } catch (err: any) {
            res.status(500).send(err.message)

        }
    },
    deleteProduct: async (req: Request, res: Response) => {
        try {
            const id = req.params.id
            await productService.delete(+id)

            res.status(200).send("Se elimino con exito")
        } catch (err: any) {
            res.status(500).send(err.message)

        }
    },
    addFavorite: async(req:Request, res:Response) => {
        try{
            const {userId, favItem} = req.body
            await productService.favorite(favItem, +userId)

            res.status(200).send("Se agrego a favoritos")
        }catch(err:any){
            res.status(500).send(err.message)

        }
    },
    getOne: async(req:Request, res:Response) => {
        try{ 
            const id = req.params.id
            
            const product = await productService.getOne(+id)

            res.status(200).send(product)
        }catch(err:any){
            res.status(500).send(err.message)

        }
    },
    getUserProducts: async(req:Request, res:Response) => {
        try{ 
            const id = req.params.userId
            const productId = req.params.productId
            const product = await productService.getUserProducts(+id, +productId)
            res.status(200).send(product)
        }catch(err:any){
            res.status(500).send(err.message)

        }
    }
}