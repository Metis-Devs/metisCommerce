
import {Router} from "express"
import productTypeRouter from "./productType.routes";
import productRoutes from "./product.routes";
import authRoutes from "./auth.routes";
import cartRoutes from "./cart.routes";

const router = Router()

router.use("/auth", authRoutes)
router.use("/productType", productTypeRouter)
router.use("/product", productRoutes)
router.use("/cart", cartRoutes)


export default router
