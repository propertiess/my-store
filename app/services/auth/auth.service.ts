import { ILogin } from '@/interfaces/login.interface';
import instance from '@/services/instance';
import jwtDecode from 'jwt-decode';
import Cookies from 'js-cookie';
import { AUTH } from '@/utils/constants';

export const AuthService = {
  async login(field: ILogin) {
    try {
      const { data } = await instance.post<{ token: string }>(
        '/auth/login',
        field
      );
      Cookies.set(AUTH.ACCESS_TOKEN, data.token);
      localStorage.setItem(AUTH.USER, JSON.stringify(jwtDecode(data.token)));
      return true;
    } catch (e) {
      return false;
    }
  },

  async logout() {
    Cookies.remove(AUTH.ACCESS_TOKEN);
    localStorage.removeItem(AUTH.USER);
  }
};
