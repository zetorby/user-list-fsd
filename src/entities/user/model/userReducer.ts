import { UserInitialState, UserTypes } from './types';
import { Action } from '../../../shared/store/types';

const initialState: UserInitialState = {
  list: null,
};

export default function (state = initialState, action: Action<UserTypes>) {
  switch (action.type) {
    default:
      return state;
  }
}
