// import { Cart } from "../entity/Cart"
import { User } from "../entity/User";
import { Product } from "../entity/Product";

export const userService = {
  findOneUser: async (userId: number): Promise<User> => {
    const user = await User.findOneBy({ id: userId });

    if (!user) throw new Error("No existe ese usuario");

    return user;
  },
  updateUser: async (
    userId: number,
    name: string,
    data: User
  ): Promise<User> => {
    const user = await User.findOneBy({ id: userId });

    if (!user) throw new Error("No existe ese usuario");

    switch (name) {
      case "firstname":
        user.firstname = data.firstname;
        break;
      case "lastname":
        user.lastname = data.lastname;
        break;
      case "email":
        user.email = data.email;
        break;
      case "phoneNumber":
        user.phoneNumber = +data.phoneNumber;
        break;
      case "idNumber":
        user.idNumber = data.idNumber;
        break;
    }

    await user.save();

    return user;
  },
  getUserProducts: async (userId: number): Promise<Product[]> => {
    const productList = await Product.find({ relations:{user:true}});

    if (!productList ) throw new Error("El usuario no tiene productos");

    const userProductList:Product[] = productList.filter((p)=>{
      return p.user.id === userId
    })


    return userProductList;
  },
};
