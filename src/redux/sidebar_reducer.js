const OPEN = 'OPEN_PROFILE';

let initialState = {
    people: [
        { id: 1, name: 'Demon' },
        { id: 2, name: 'Alex' },
        { id: 3, name: 'Valera' },
        { id: 4, name: 'Anton' },
        { id: 5, name: 'Andre' },
    ],
};

const sidebarReducer = (state = initialState, action) => {
    if (action.type === OPEN) {
        
    }
    return state;
};

export default sidebarReducer;