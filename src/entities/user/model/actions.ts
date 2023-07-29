import { User, UserTypes } from './types';
import store from '../../../shared/store/store';

export const getUserList = async (): Promise<void> => {
  const dispatch = store.dispatch;
  dispatch({ type: UserTypes.SET_LOADING, payload: true });

  try {
    const response = await fetch('https://jsonplaceholder.typicode.com/users', {
      method: 'GET',
    });
    if (!response.ok) {
      throw new Error(response.statusText);
    }
    const data = (await response.json()) as User[];
    dispatch({ type: UserTypes.SET_LOADING, payload: false });
    dispatch({ type: UserTypes.SET_USERS, payload: data });
  } catch (error) {
    console.log(error);
    dispatch({ type: UserTypes.SET_LOADING, payload: false });
  }
};
