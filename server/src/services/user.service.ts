// import { Cart } from "../entity/Cart"
import { User } from "../entity/User"

export const userService = {
    findOneUser: async(userId:number):Promise<User> => {
        const user = await User.findOneBy({id: userId})

        if(!user) throw new Error("No existe ese usuario")

        
        return user
    }
}