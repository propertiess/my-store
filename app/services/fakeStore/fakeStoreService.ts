import { fakeStoreInstance } from '@services/fakeStore/fakeStoreInstance';
import { IProduct } from '@interfaces/product.interface';

export const fakeStoreService = {
  async fetchProducts() {
    const { data } = await fakeStoreInstance.get<IProduct[]>('/products');
    return data;
  }
};
