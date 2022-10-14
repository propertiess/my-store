import axios from 'axios';

export const storeInstance = axios.create({
  baseURL: 'https://fakestoreapi.com'
});
