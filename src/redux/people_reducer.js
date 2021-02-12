import { getUsers, subscriptionAPI } from "../api/api";

const FOLLOW = 'FOLLOW';
const UNFOLLOW = 'UNFOLLOW';
const SET_USERS = 'SET_USERS';
const SET_CURRENT_PAGE = 'SET_CURRENT_PAGE';
const SET_TOTAL_USERS_COUNT = 'SET_TOTAL_USERS_COUNT';
const TOGGLE_FETCHING = 'TOGGLE_FETCHING';
const TOGGLE_FOLLOWING = 'TOGGLE_FOLLOWING';

let initialState = {
    people: [],
    pageSize: 5,
    totalUsersCount: 1,
    currentPage: 1,
    isFetching: false,
    followingInProgress: [],
};

const peopleReducer = (state = initialState, action) => {
    switch (action.type) {        
        case FOLLOW:
            return {
                ...state,
                people: state.people.map(p => {
                    if (p.id === action.userID){
                        return {...p, followed: true};
                    }
                    return p;                    
                }) 
            };           
        case UNFOLLOW:
            return {
                ...state,
                people: state.people.map(p => {
                    if (p.id === action.userID){
                        return {...p, followed: false};
                    }
                    return p;
                }) 
            };            
        case SET_USERS:
            return {...state, people: action.users,};
        case SET_CURRENT_PAGE:
            return {...state, currentPage: action.currentPage,};
        case SET_TOTAL_USERS_COUNT:
            return {...state, totalUsersCount: action.totalUsersCount,};
        case TOGGLE_FETCHING:
            return {...state, isFetching: action.isFetching,};
        case TOGGLE_FOLLOWING:
            return {...state,
                    followingInProgress: action.isFetching
                    ? [...state.followingInProgress, action.userID]
                    : state.followingInProgress.filter(id => id !== action.userID)
                }
        default:
            return state;            
    }
};

// Actions_Creators
export const follow = (userID) => ({type: FOLLOW, userID});
export const unfollow = (userID) => ({ type: UNFOLLOW, userID});
export const setUsers = (users) => ({ type: SET_USERS, users});
export const setPage = (currentPage) => ({type: SET_CURRENT_PAGE, currentPage});
export const setTotalUsersCount = (totalUsersCount) => ({type: SET_TOTAL_USERS_COUNT, totalUsersCount});
export const toggleFetching = (isFetching) => ({type: TOGGLE_FETCHING, isFetching});
export const toggleFollowing = (isFetching, userID) => ({type: TOGGLE_FOLLOWING, isFetching, userID});

// Thunk_Creator
export const getUsersTC = (currentPage, pageSize) => {
    return async (dispatch) => {
        dispatch(toggleFetching(true));
        let data = await getUsers(currentPage, pageSize)                    
            dispatch(setUsers(data.items));
            dispatch(setTotalUsersCount(data.totalCount));
            dispatch(toggleFetching(false));               
    };
};
export const followTC = (id) => {
    return async (dispatch) => {
        dispatch(toggleFollowing(true, id));
        let data = await subscriptionAPI.subs(id)
            if (data.resultCode === 0) {
                dispatch(follow(id));
            }
            dispatch(toggleFollowing(false, id));        
    };
};
export const unfollowTC = (id) => {
    return async (dispatch) => {
        dispatch(toggleFollowing(true, id));
        let data = await subscriptionAPI.unsub(id)
            if (data.resultCode === 0) {
                dispatch(unfollow(id));
            }
            dispatch(toggleFollowing(false, id));    
    };
};
export default peopleReducer;
