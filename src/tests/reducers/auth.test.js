import authReducer  from '../../reducers/auth';

describe('auth reducer test',() => {
    it('should set default state', () => {
        const state = authReducer(undefined, { type: '@@INIT' });
        expect(state).toEqual({});
    });

    it('should set uid for login', () => {
        const uid = 'hdoehh4545';
        const action = {
            type: 'LOGIN',
            uid
        };
        const state = authReducer({}, action);
        expect(state).toEqual({uid: uid});
    });
    it('should unset uid on logout', () => {
       const action = { type: 'LOGOUT'};
       const state = authReducer({uid: 'test'}, action);
       expect(state).toEqual({});
    });

    it('should set current user', () => {
        const action = { type: 'SET_CURRENT_USER'};
        const payload = {
          isAuthenticated: true,
          user: { user: 'User' }
        };
        const state = authReducer(payload, action);
        expect(state).toEqual({
            isAuthenticated: false,
            user: undefined
        })
    });

});


