import {Router} from "express"
import { userController } from "../controller/user.controller"


const userRoutes = Router()


userRoutes.post("/getUser", userController.findOneUser)


export default userRoutes