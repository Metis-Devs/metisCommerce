import {Router} from "express"
import { userController } from "../controller/user.controller"


const userRoutes = Router()


userRoutes.post("/getUser", userController.findOneUser)
userRoutes.post("/updateUser", userController.updateUser)


export default userRoutes