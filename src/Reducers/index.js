import { combineReducers } from 'redux';
import hotels from './HotelReducer';

const rootReducer = combineReducers({ hotels });

export default rootReducer;
