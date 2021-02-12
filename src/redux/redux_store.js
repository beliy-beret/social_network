import profileReducer from './profile_reducer';
import messagesReducer from './messages_reducer';
import sidebarReducer from './sidebar_reducer';
import peopleReducer from './people_reducer';
import authReducer from './auth_reducer';
import appReducer from './app_reducer';
import thunkMiddleware from 'redux-thunk';
import { createStore, applyMiddleware, compose, combineReducers } from 'redux';

//const { createStore, combineReducers, applyMiddleware } = require("redux");

let reducerStack = combineReducers({    
    profilePage: profileReducer,
    messagesPage: messagesReducer,
    sidebarPage: sidebarReducer,
    peoplePage: peopleReducer,
    auth: authReducer,
    app: appReducer,
});

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(reducerStack, composeEnhancers(applyMiddleware(thunkMiddleware)));

window._STORE_ = store;

export default store;

