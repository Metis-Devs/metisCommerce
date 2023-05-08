import { ProductType } from "../entity/ProductType";
import { Product } from "../entity/Product";
import { User } from "../entity/User";

export const productService = {
  create: async (
    name: string,
    price: number,
    description: string,
    image: string,
    stock: number,
    productTypes: ProductType[],
    user: User
  ): Promise<Product> => {
    const product = new Product();

    product.name = name;
    product.price = +price;
    product.description = description;
    product.image = image;
    product.stock = +stock;
    product.productTypes = productTypes;
    product.user = user;

    await product.save();

    return product;
  },
  getAll: async (): Promise<Product[]> => {
    const productTypes = await Product.find();
    return productTypes;
  },
  update: async (
    id: number,
    name: string,
    price: number,
    description: string,
    image: string,
    stock: number,
    productTypes: ProductType[]
  ): Promise<Product> => {
    const product = await Product.findOneBy({ id: +id });

    if (!product) throw new Error("No existe el tipo producto");

    product.name = name;
    product.name = name;
    product.price = +price;
    product.description = description;
    product.image = image;
    product.stock = +stock;
    product.productTypes = productTypes;
    // product.user = user

    await product.save();

    return product;
  },
  delete: async (id: number) => {
    const product = await Product.findOneBy({ id: +id });

    if (!product) throw new Error("No existe el tipo producto");

    await Product.delete(id);
  },
  favorite: async (product: Product[], userId: number) => {
    const user = await User.findOneBy({ id: userId });

    if (!user) throw new Error("No existe el usurario");

    user.favoritesItem = product;

    await user.save();
  },
  getOne: async (id: number): Promise<Product> => {
    const productTypes = await Product.findOne({where:{ id: id }, relations:{user:true}});
    if (!productTypes) throw new Error("No existe este producto!");
    
    return productTypes;
  },
  getUserProducts: async (userId: number, productId:number): Promise<Product[]> => {
    const userProductList:Product[] = []
    const products = await Product.find({
      relations:{user:true}
    });
    if (!products) throw new Error("No existe este producto!");
    
    products.map(p => {
      if(p.user.id === userId && p.id !== productId && userProductList.length < 4){
        userProductList.push(p)
      }
    })
    return userProductList;
  },
  getProductType: async (name:string): Promise<Product[]> => {
    const userProductList:Product[] = []
    const products = await Product.find({
      relations:{productTypes:true}
    });
    
    
    if (!products) throw new Error("No existe este producto!");
   
   
    products.map(p => {
      
      
      p.productTypes.map(t => {
        if(t.name === name){
            userProductList.push(p)
          }
      })
    })
    return userProductList;
  },
};
