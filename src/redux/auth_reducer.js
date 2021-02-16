import { FORM_ERROR } from "final-form";
import { aboutMe, securityAPI, userProfileAPI } from "../api/api";
import { toggleFetching } from "./people_reducer";

const SET_USER_DATA = 'SET_USER_DATA';
const SET_CAPTCHA_URL = 'SET_CAPTCHA_URL';

let initialState = {
    id: null,
    email: null,
    login: null,
    isAuth: false,
    photos: {
        large: null,
        small: null
    },
    isFetching: false,    
    captchaURL: null,      
};

const authReducer = (state = initialState, action) => {        
    switch (action.type) {
        case SET_USER_DATA:            
            return {
                ...state,
                ...action.data                                            
            };            
        case SET_CAPTCHA_URL:
            return {
                ...state,
                captchaURL: action.captchaURL
            }
                
        default:
            return state;
    }                        
};

// Actions_Creator
export const setAuthUserData = (id, email, login, isAuth) => ({ type: SET_USER_DATA, data: {id, email, login, isAuth} });
export const setCaptchaURL = (captchaURL) => ({ type: SET_CAPTCHA_URL, captchaURL })

// Thunks_Creator
export const getAuthUserData = () => (dispatch) => {
    dispatch(toggleFetching(true));
    return  aboutMe()
        .then( response => {                                    
            if (response.data.resultCode === 0) {                
                let data = {...response.data.data};                
                dispatch(setAuthUserData(data.id, data.email, data.login, true));                
            }      
        });    
};

export const getCaptchaURL = () => async (dispatch) => {    
    dispatch(toggleFetching(true));
    const response = await securityAPI.getCaptchaURL();
    const captchaURL = response.data.url;     
    dispatch( setCaptchaURL(captchaURL) )     
};

export const log_in = (email, password, rememberMe, captcha) => async (dispatch) => {
    dispatch(toggleFetching(true));
    let response = await userProfileAPI.authorization(email, password, rememberMe, captcha)
        if (response.data.resultCode === 0) {
            dispatch(getAuthUserData());
        } else {
            if (response.data.resultCode === 10) {
                dispatch( getCaptchaURL());            
                return {[FORM_ERROR]: response.data.messages[0] }
            }            
        }
            dispatch(toggleFetching(false)); 
            return { [FORM_ERROR]: response.data.messages[0] }
}

export const log_out = () => async (dispatch) => {
    dispatch(toggleFetching(true));
    let response = await userProfileAPI.logout()    
        if (response.data.resultCode === 0) {
            dispatch(setAuthUserData( null, null, null, false ))
        }        
    dispatch(toggleFetching(false));
}
export default authReducer;