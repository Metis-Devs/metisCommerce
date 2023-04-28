import { Router } from "express"
import { productController } from "../controller/product.controller"
import { uploadImg } from "../middlewares/uploadImg.middleware"

const productRoutes = Router()

productRoutes.get("/", productController.getAllProducts)
productRoutes.post("/create", uploadImg, productController.createProduct)
productRoutes.put("/update", uploadImg, productController.updateProduct)
productRoutes.delete("/delete/:id", productController.deleteProduct)

export default productRoutes