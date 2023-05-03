import { Request, Response } from "express";
import { cartService } from "../services/cart.service";

export const cartController = {
    addProduct: async (req: Request, res: Response) => {
        try {
            const { userId, productId, amount } = req.body

            const cartProduct = await cartService.addProduct(userId, productId, amount)

            res.status(200).send(cartProduct)
        } catch (err: any) {
            res.status(500).send(err.message)

        }
    }
} 