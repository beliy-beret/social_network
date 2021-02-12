// Объект с данными
// import profileReducer from './profile_reducer';
// import messageReducer from './messages_reducer';
// import sidebarReducer from './sidebar_reducer';

// let store = {
//     _state: {
//         profilePage: {
//             posts: [
//                 { id: 1, message: 'Hi, how are you?', like: 10 },
//                 { id: 2, message: "It's my first post", like: 15 },
//             ],
//             newPostText: 'input your text',
//         },
//         messagesPage: {
//             dialogs: [
//                 { id: 1, name: 'Demon' },
//                 { id: 2, name: 'Alex' },
//                 { id: 3, name: 'Valera' },
//                 { id: 4, name: 'Anton' },
//                 { id: 5, name: 'Andre' },
//             ],
//             messages: [
//                 { id: 1, message: 'Hi !' },
//                 { id: 2, message: 'Hello !' },
//                 { id: 3, message: 'How are you ?' },
//                 { id: 4, message: 'All right' },
//             ],
//             newMessageText: '',
//         },
//         sidebarPage: {
//             people: [
//                 { id: 1, name: 'Demon' },
//                 { id: 2, name: 'Alex' },
//                 { id: 3, name: 'Valera' },
//                 { id: 4, name: 'Anton' },
//                 { id: 5, name: 'Andre' },
//             ],
//         },
//     },
//     _callSubscriber() { },
//     getState() {
//         return this._state;
//     },
//     subscribe(observer) {
//         this._callSubscriber = observer;
//     },
//     dispatch(action) {
//        this._state.profilePage = profileReducer(this._state.profilePage, action);
//        this._state.messagesPage = messageReducer(this._state.messagesPage, action);
//        this._state.sidebar = sidebarReducer(this._state.sidebar, action);
//        this._callSubscriber(this._state);        
//     },  
// };

// export default store;