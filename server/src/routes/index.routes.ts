
import {Router} from "express"
import productTypeRouter from "./productType.routes";
import productRoutes from "./product.routes";

const router = Router()

router.use("/productType", productTypeRouter)
router.use("/product", productRoutes)


export default router
