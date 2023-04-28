import {Router} from "express"
import { productController } from "../controller/product.controller"

const productRoutes = Router()

productRoutes.get("/", productController.getAllProducts)
productRoutes.post("/create", productController.createProduct)
productRoutes.post("/addFavorite", productController.addFavorite)
productRoutes.put("/update", productController.updateProduct)
productRoutes.delete("/delete/:id", productController.deleteProduct)

export default productRoutes