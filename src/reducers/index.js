import { combineReducers } from "redux";
import authReducer from "./auth";
import businessReducer from './businessReducer';

export default combineReducers({
    auth: authReducer,
    results: businessReducer
})