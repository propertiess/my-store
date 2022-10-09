import { fakeStoreInstance } from './fakeStoreInstance';
import { IProduct } from '../../types/product.interface';

export const fakeStoreAPI = {
  async fetchProducts() {
    const { data } = await fakeStoreInstance.get<IProduct[]>('/products');
    return data;
  }
};
