import { IProduct } from '@/interfaces/product.interface';
import instance from '@/services/instance';

export const ProductsService = {
  async fetchProducts() {
    const { data } = await instance.get<IProduct[]>('/products');
    return data;
  },

  async fetchProduct(id: number) {
    const { data } = await instance.get<IProduct>(`/products/${id}`);
    return data;
  }
};
