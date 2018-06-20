import isEmpty from 'lodash/isEmpty';
import { SET_CURRENT_USER } from '../Constants/constants';
let intialState = 
{

    isAuthenticated:false,
    user:{}
}
export default function login(state = intialState,action={})
{
    switch(action.type)
    {
            case SET_CURRENT_USER:
            {
                  return{isAuthenticated :!isEmpty(action.payload), user:action.payload}
            }
            default:
            {
                return state;
            }
    }
}