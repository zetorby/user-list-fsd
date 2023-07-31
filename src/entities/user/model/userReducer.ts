import { UserInitialState, UserTypes } from './types';
import { Action } from '../../../shared/store/types';

const initialState: UserInitialState = {
  isLoading: false,
  list: null,
  snapshot: null,
  search: '',
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
        snapshot: action.payload,
      };
    case UserTypes.REMOVE_USER:
      return {
        ...state,
        list: state.list?.filter((user) => user.id !== action.payload),
      };
    case UserTypes.SET_SEARCH_TEXT:
      return {
        ...state,
        search: action.payload,
      };
    case UserTypes.CLEAR_FILTER:
      return {
        ...state,
        search: '',
        list: state.snapshot,
      };
    default:
      return state;
  }
}
