
import {Router} from "express"
import productTypeRouter from "./productType.routes";
import productRoutes from "./product.routes";
import authRoutes from "./auth.routes";

const router = Router()

router.use("/auth", authRoutes)
router.use("/productType", productTypeRouter)
router.use("/product", productRoutes)


export default router
