import {Router} from "express"
import { productTypeController } from "../controller/productType.controller"

const productTypeRouter = Router()

productTypeRouter.get("/", productTypeController.getAllProductTypes)
productTypeRouter.post("/create", productTypeController.createProductType)
productTypeRouter.put("/update", productTypeController.updateProductType)
productTypeRouter.delete("/delete/:id", productTypeController.deleteProductType)

export default productTypeRouter