import { combineReducers } from 'redux';

import userReducer from '../../entities/user/model/userReducer';

export default combineReducers({
  user: userReducer,
});
