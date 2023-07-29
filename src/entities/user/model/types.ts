export type Company = {
  name: string;
  bs: string;
  catchPhrase: string;
};

export type Geo = {
  lat: string;
  lng: string;
};

export type Address = {
  city: string;
  street: string;
  suite: string;
  zipcode: string;
  geo: Geo;
};

export type User = {
  id: number;
  name: string;
  username: string;
  phone: string;
  website: string;
  email: string;
  company: Company;
  address: Address;
};

export type UserInitialState = {
  isLoading: boolean;
  list: User[] | null;
};

export enum UserTypes {
  SET_LOADING = 'USER/SET_LOADING',
  SET_USERS = 'USER/SET_USERS',
}
