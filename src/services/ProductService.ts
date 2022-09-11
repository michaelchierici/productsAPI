import { getRepository } from "typeorm";
import { Product } from "../entity/Product";

export class ProductService {
  static create(
    name: string,
    ammount: number,
    type: string,
    price: number,
    img: string
  ) {
    const productRepository = getRepository(Product);
    const product = productRepository.create({
      name,
      ammount,
      type,
      price,
      img,
    });
    productRepository.save(product);
    return product;
  }

  static async findAll() {
    const productRepository = getRepository(Product);
    const products = await productRepository.find({});
    return products;
  }

  static async findOne(id: any) {
    const productRepository = getRepository(Product);
    const product = await productRepository.findOne(id);
    console.log(product, `um ${product.name} encontrado`);
    return product;
  }

  static async update(id: any, name: string) {
    const productRepository = getRepository(Product);
    const product = await productRepository.findOne(id);
    const productUpdated = productRepository.merge(product, {
      name,
    });
    await productRepository.save(productUpdated);
    return productUpdated;
  }

  static async delete(id: any) {
    const productRepository = getRepository(Product);
    const product = await productRepository.findOne(id);
    const productDeleted = await productRepository.softRemove(product);
    console.log(productDeleted, `${product.name} excluído com sucesso`);
  }
}
