import { userProfileAPI } from "../api/api";
import { toggleFetching } from "./people_reducer";

const ADD_POST = 'ADD-POST';
const SET_USER_PROFILE = 'SET-USER-PROFILE';
const SET_STATUS = 'SET_STATUS';
const REPLACE_PHOTO = 'REPLACE_PHOTO';

let initialState = {
    posts: [
    { id: 1, message: 'Hi, how are you?', like: 10 },
    { id: 2, message: "It's my first post", like: 15 },
    ],    
    profile: {
        contacts: null,
        photos: {
            large: null,
        }        
    },
    status: "---",         
};
const profileReducer = (state = initialState, action) => {    
    switch (action.type) {
        case ADD_POST:
            let text = action.newPostText;
            return {
                ...state,
                posts: [...state.posts, {id: 5, message: text, like: 0}],
            };
        case SET_USER_PROFILE:                        
            return {
                ...state,
                profile: action.profile
            };
        case SET_STATUS:                        
            return {
                ...state,                
                status: action.status,
            };
        case REPLACE_PHOTO:                        
            return {
                ...state,                
                profile: {...state.profile, photos: action.photos}
            };            
        default:
            return state;
    }                    
};

// Actions_Creator
export const addPost = (newPostText) => ({type: ADD_POST, newPostText});
export const setUserProfile = (profile) => ({type: SET_USER_PROFILE, profile});
export const setStatus = (status) => ({type: SET_STATUS, status});
export const replacePhoto = (photos) => ({type: REPLACE_PHOTO, photos});

// Thunks_Creator
export const getUserProfileTC = (userId) => async (dispatch) => {
    dispatch(toggleFetching(true));
    let data = await userProfileAPI.profileInfo(userId)    
    dispatch(setUserProfile(data));
    dispatch(toggleFetching(false));            
}
export const getUserStatusTC = (userID) => async (dispatch) => {
    dispatch(toggleFetching(true));
    let response = await userProfileAPI.userStatus(userID)
    dispatch(setStatus(response));
    dispatch(toggleFetching(false));    
};
export const updateUserStatusTC = (status) => async (dispatch) => {
    dispatch(toggleFetching(true));
    let response = await userProfileAPI.updateStatus(status)
    if (response.data.resultCode === 0) {
        dispatch(setStatus(status));
        dispatch(toggleFetching(false));
    }    
};
export const replacePhotoTC = (image) => async (dispatch) => {
    dispatch(toggleFetching(true));
    let response = await userProfileAPI.replacePhoto(image)
    if (response.data.resultCode === 0) {
        dispatch(replacePhoto(response.data.data.photos));
        dispatch(toggleFetching(false));
    }    
};
export default profileReducer;