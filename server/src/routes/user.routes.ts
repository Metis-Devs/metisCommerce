import {Router} from "express"
import { userController } from "../controller/user.controller"


const userRoutes = Router()


userRoutes.post("/addToCart", userController.addToCart)


export default userRoutes