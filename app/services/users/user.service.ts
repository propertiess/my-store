import jwtDecode from 'jwt-decode';
import { IUser, IUserBack } from '@/interfaces/user.interface';
import instance from '@/services/instance';
import { AUTH } from '@/utils/constants';

export const UserService = {
  async fetchUser(cookies: Partial<{ [p: string]: string }>) {
    const token = cookies[AUTH.ACCESS_TOKEN];
    if (!token) return null;

    const data: IUserBack = jwtDecode(token);
    const id = data.sub;

    try {
      const { data } = await instance.get<IUser>(`/users/${id}`);
      return data;
    } catch (e) {
      return null;
    }
  },
  async fetchUsersData() {
    try {
      const { data } = await instance.get<
        [{ username: string; password: string }]
      >('/users');
      return data;
    } catch (e) {
      return null;
    }
  }
};
