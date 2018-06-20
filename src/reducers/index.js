import { combineReducers } from 'redux';
import LoginReducer from "./LoginReducer";
import FlashMessagesReducer from "./FlashMessagesReducer";
import { sessionService, sessionReducer } from 'redux-react-session';

export default combineReducers(
    {
       
       Users:LoginReducer,
       FlashMessages:FlashMessagesReducer,
       session:sessionReducer
    }
)