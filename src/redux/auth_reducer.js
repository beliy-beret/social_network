import { FORM_ERROR } from "final-form";
import { aboutMe, userProfileAPI } from "../api/api";
import { toggleFetching } from "./people_reducer";

const SET_USER_DATA = 'SET_USER_DATA';
const SET_ERROR = 'SET_ERROR';

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
    error: null,      
};

const authReducer = (state = initialState, action) => {        
    switch (action.type) {
        case SET_USER_DATA:            
            return {
                ...state,
                ...action.data                                            
            };            
        case SET_ERROR:
            return {
                ...state,
                error: action.messages[0]
            }
                
        default:
            return state;
    }                        
};

// Actions_Creator
export const setAuthUserData = (id, email, login, isAuth) => ({ type: SET_USER_DATA, data: {id, email, login, isAuth} });
export const setError = (messages) => ({ type: SET_ERROR, messages })

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

export const log_in = (email, password, rememberMe) => async (dispatch) => {
    dispatch(toggleFetching(true));
    let response = await userProfileAPI.authorization(email, password, rememberMe)
        if (response.data.resultCode === 0) {
            dispatch(getAuthUserData())
        } else {
            return {[FORM_ERROR]: response.data.messages[0] }           
            //dispatch(setError(response.data.messages))
        }        
    dispatch(toggleFetching(false));
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