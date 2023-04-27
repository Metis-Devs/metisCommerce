import { ProductType } from "../entity/ProductType";
import { Product } from "../entity/Product";
import { User } from "../entity/User";

export const productService = {
  create: async (name: string,price:number, description:string, image:string, stock:number, productTypes:ProductType[], user:User): Promise<Product> => {
    const product = new Product();

    product.name = name;
    product.price = +price;
    product.description = description;
    product.image = image;
    product.stock = +stock;
    product.productTypes = productTypes;
    product.user = user

    await product.save();

    return product;
  },
  getAll: async (): Promise<Product[]> => {
    const productTypes = await Product.find();
    return productTypes;
  },
  update: async (id: number, name: string,price:number, description:string, image:string, stock:number, productTypes:ProductType[]): Promise<Product> => {
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
};