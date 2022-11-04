import axios from 'axios';
import Cookies from 'js-cookie';
import { AUTH } from '@/utils/constants';

const instance = axios.create({
  baseURL: 'https://fakestoreapi.com',
  headers: {
    'Content-Type': 'application/json'
  }
});

instance.interceptors.request.use(config => {
  const accessToken = Cookies.get(AUTH.ACCESS_TOKEN);

  if (accessToken && config.headers) {
    config.headers.Authorization = `Bearer ${accessToken}`;
  }

  return config;
});

export default instance;
