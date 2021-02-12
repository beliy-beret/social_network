const SEND_MESSAGE = 'SEND-MESSAGE';

let initialState = {
    dialogs: [
        { id: 1, name: 'Demon' },
        { id: 2, name: 'Alex' },
        { id: 3, name: 'Valera' },
        { id: 4, name: 'Anton' },
        { id: 5, name: 'Andre' },
    ],
    messages: [
        { id: 1, message: 'Hi !' },
        { id: 2, message: 'Hello !' },
        { id: 3, message: 'How are you ?' },
        { id: 4, message: 'All right' },
    ],    
};

const messagesReducer = (state = initialState, action) => {        
    switch (action.type) {        
        case SEND_MESSAGE:
            let text = action.newMessageText;
            return {
                ...state,                
                messages: [...state.messages, {id: 2, message: text}],        
            };      
                    
        default:
            return state;            
    }
};

export const sendMessage = (newMessageText) => ({type: SEND_MESSAGE, newMessageText});

export default messagesReducer;