import { combineReducers } from 'redux';
import hotels from './HotelReducer';
import user from './UserReducer';

const rootReducer = combineReducers({ hotels, user });

export default rootReducer;
