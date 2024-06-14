import Product from '../models/product';

class ProductService {
  async createProduct(data: { name: string, price: number, description: string }) {
    return await Product.create(data);
  }

  async getProductById(id: number) {
    return await Product.findByPk(id);
  }

  async getAllProducts() {
    return await Product.findAll();
  }

  async updateProduct(id: number, data: { name?: string, price?: number, description?: string }) {
    const product = await Product.findByPk(id);
    if (!product) {
      throw new Error('Product not found');
    }
    return await product.update(data);
  }

  async deleteProduct(id: number) {
    const product = await Product.findByPk(id);
    if (!product) {
      throw new Error('Product not found');
    }
    return await product.destroy();
  }
}

export default new ProductService();
