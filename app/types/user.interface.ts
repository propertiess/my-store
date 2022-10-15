export interface IUser {
  id: number;
  email: string;
  username: string;
  name: Name;
  address: Address;
  phone: string;
}

type Address = {
  city: string;
  street: string;
  zipcode: string;
  geolocation: Geolocation;
};

type Name = {
  firstname: string;
  lastname: string;
};

type Geolocation = {
  lat: string;
  long: string;
};

export type IUserBack = {
  sub: number;
  user: string;
  iat: number;
};

export interface IDataForLogin {
  username: string;
  password: string;
}
