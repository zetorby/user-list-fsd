import { UserInitialState, UserTypes } from './types';
import { Action } from '../../../shared/store/types';

const initialState: UserInitialState = {
  isLoading: false,
  list: null,
};

export default function (state = initialState, action: Action<UserTypes>) {
  switch (action.type) {
    case UserTypes.SET_LOADING:
      return {
        ...state,
        isLoading: action.payload,
      };
    case UserTypes.SET_USERS:
      return {
        ...state,
        list: action.payload,
      };
    default:
      return state;
  }
}
