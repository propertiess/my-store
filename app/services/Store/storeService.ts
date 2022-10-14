import { storeInstance } from '@services/Store/StoreInstance';
import { IProduct } from '@interfaces/product.interface';

export const StoreService = {
  async fetchProducts() {
    const { data } = await storeInstance.get<IProduct[]>('/products');
    return data;
  },

  async fetchProduct(id: number) {
    const { data } = await storeInstance.get<IProduct>(`/products/${id}`);
    return data;
  }
};
