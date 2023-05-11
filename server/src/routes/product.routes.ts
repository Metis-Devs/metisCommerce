import { Router } from "express"
import { productController } from "../controller/product.controller"
import { uploadImg } from "../middlewares/uploadImg.middleware"

const productRoutes = Router()

productRoutes.get("/", productController.getAllProducts)
productRoutes.post("/create", uploadImg, productController.createProduct)
productRoutes.get("/getOne/:id", productController.getOne)
productRoutes.get("/userProducts/:userId/:productId", productController.getUserProducts)
productRoutes.post("/update",  productController.updateProduct)
productRoutes.post("/addFavorite", productController.addFavorite)
productRoutes.delete("/delete/:id", productController.deleteProduct)
productRoutes.get("/productType/:type", productController.getProductType)

export default productRoutes