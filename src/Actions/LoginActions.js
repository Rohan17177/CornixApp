import { API_URL, SET_CURRENT_USER } from "../Constants/constants"
import axios from "axios"
import { sessionService } from 'redux-react-session';


export function Register(data) 
{
    return dispatch => {
        return fetch(API_URL + "register/",
            {
                method: 'POST',
                body: JSON.stringify(data),
                credentials:"include"
            }
        ).then((res) => {
            return res.json().then(res => {
                console.log("Register", res)
                return res;
            })

        })
    }
}



function Handlelogin(data) {
    return { type: SET_CURRENT_USER, payload: data }
}
export function Login(data) {
    return dispatch => {


        return fetch(API_URL + "login/",
            {
                method: 'POST',
                credentials: 'include',
                // withCredentials:true,
                body: JSON.stringify(data),
                // mode:"cors",
            }
        ).then((res) => {
            console.log("RESPONSE", res)
            return res.json().then((res) => {

                if (res.data.full_name) {
                    localStorage.setItem('IsLoggedIn', 'true')
                    localStorage.setItem('UserData', JSON.stringify(res))
                    dispatch(Handlelogin(res))
                }
                sessionService.saveSession({ user: res })
                return res;
            })
        })
    }

}

export function Logout() {
    return dispatch => {

        return fetch(API_URL + "logout/",
            {
                method: 'POST',
                credentials: 'include',
                // body: JSON.stringify(data),
            }
        ).then((res) => {
            return res.json().then((res) => {
                localStorage.setItem('IsLoggedIn', 'false')
                localStorage.setItem('UserData',null)
                sessionService.deleteSession();
                // localStorage.setItem('UserData',JSON.stringify(res))
                // dispatch(Handlelogin(res))
                return res;
            })
        })
    }


}

export function ChangePassword(data)
{
    return dispatch => {

        return fetch(API_URL + "change_password/",
            {
                method: 'POST',
                credentials: 'include',
                body: JSON.stringify(data),

            }
        ).then((res) => {
            return res.json().then((res) => {

                console.log("Change Password Done",res)
                return res;
            })
        })
    }


}