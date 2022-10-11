import axios from 'axios';

export const fakeStoreInstance = axios.create({
  baseURL: 'https://fakestoreapi.com'
});
