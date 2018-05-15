import errorReducer  from '../../reducers/error';

describe('auth reducer test',() => {
    it('should set default state', () => {
        const state = errorReducer(undefined, { type: '@@INIT' });
        expect(state).toEqual({});
    });

    // it('should set uid for login', () => {
    //     const uid = 'hdoehh4545';
    //     const action = {
    //         type: 'LOGIN',
    //         uid
    //     };
    //     const state = errorReducer({}, action);
    //     expect(state).toEqual({uid: uid});
    // });
    // it('should unset uid on logout', () => {
    //     const action = { type: 'LOGOUT'};
    //     const state = errorReducer({uid: 'test'}, action);
    //     expect(state).toEqual({});
    // });
});


