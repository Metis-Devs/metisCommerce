import { Router } from "express"
import { cartController } from "../controller/cart.controller"
const cartRoutes = Router()

cartRoutes.post("/addProduct", cartController.addProduct)

export default cartRoutes 