import { getAuthUserData } from "./auth_reducer";

const SET_INITIAL = "SET_INITIAL";

let initialState = {
    initialization: false,
}

const appReducer = ( state = initialState, action) => {
    switch (action.type){
        case SET_INITIAL: 
            return {
                ...state,
                initialization: true
            }
        default:
            return state
    }    
};

// Action_Creator
export const setInitial = () => ({ type: SET_INITIAL });

// Thunk_Creator
export const initialApp = () => ( dispatch ) => {
    let promise = dispatch( getAuthUserData() );
    promise.then( dispatch( setInitial() ) )    
}

export default appReducer;