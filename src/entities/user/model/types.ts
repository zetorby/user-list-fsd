export type User = {
  id: string;
  name: string;
};

export type UserInitialState = {
  list: User[] | null;
};

export enum UserTypes {
  SET_LOADING = 'USER/SET_LOADING',
  SET_USERS = 'USER/SET_USERS',
}
