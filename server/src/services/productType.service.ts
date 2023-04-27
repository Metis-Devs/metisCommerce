import { ProductType } from "../entity/ProductType";

export const productTypeService = {
  create: async (name: string): Promise<ProductType> => {
    const productType = new ProductType();

    productType.name = name;

    await productType.save();

    return productType;
  },
  getAll: async (): Promise<ProductType[]> => {
    const productTypes = await ProductType.find();
    return productTypes;
  },
  update: async (id: number, name: string): Promise<ProductType> => {
    const productType = await ProductType.findOneBy({ id: +id });

    if (!productType) throw new Error("No existe el tipo producto");

    productType.name = name;

    await productType.save();

    return productType;
  },
  delete: async (id: number) => {
    const productType = await ProductType.findOneBy({ id: +id });

    if (!productType) throw new Error("No existe el tipo producto");

    await ProductType.delete(id);
  },
};
