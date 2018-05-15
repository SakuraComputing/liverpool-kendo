import isEmpty from '../validation/is-Empty';

const initialState = {
    isAuthenticated: false,
    user: {}
};

export default (state = {}, action) => {
    switch (action.type) {
        case 'SET_CURRENT_USER':
            return {
                ...state,
                isAuthenticated: !isEmpty(action.payload),
                user: action.payload
            };
        case 'LOGIN':
            return {
                uid: action.uid,
                currentUser: action.currentUser
            };
        case 'LOGOUT':
            return {};
        default:
            return state;
    }
};


