import { Cart } from "../entity/Cart";
import { CartProduct } from "../entity/CartProduct";
import { Product } from "../entity/Product";
import { User } from "../entity/User";


export const cartService = {
    addProduct: async(userId: number, productId: number, amount: number):Promise<CartProduct> => {
        const user = await User.findOneBy({id: +userId}) 
        const product = await Product.findOneBy({id:+productId})
        const cartProduct: CartProduct = new CartProduct()
        if (!user) throw new Error("No existe el usuario");
        if (!product) throw new Error("No existe el producto");

        if(user.cart == null) {  
            user.cart = new Cart()
            user.cart.totalPrice = 0
        } 
        user.cart.totalPrice = user.cart.totalPrice + (product.price * amount)
        cartProduct.cart = user.cart
        cartProduct.product = product
        cartProduct.amount = amount
        await user.cart.save()
        await user.save()
        await cartProduct.save()
        return cartProduct
    }
}