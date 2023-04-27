
import {Router} from "express"
import productTypeRouter from "./productType.routes";
import productRoutes from "./product.route";

const router = Router()

router.use("/productType", productTypeRouter)
router.use("/product", productRoutes)


export default router
