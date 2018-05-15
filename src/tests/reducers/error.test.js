import errorReducer  from '../../reducers/error';

describe('auth reducer test',() => {
    it('should set default state', () => {
        const state = errorReducer(undefined, { type: '@@INIT' });
        expect(state).toEqual({});
    });

    it('should return an empty object when errors are cleared', () => {
        const action = {
            type: 'CLEAR_ERRORS'
        };
        const state = errorReducer({}, action);
        expect(state).toEqual({});
    });

    it('should return a payload when it gets errors', () => {
       const payload = { payload: 'payload' };
       const action = {
           type: 'GET_ERRORS'
       };
       const state = errorReducer(payload, action);
       expect(state).toEqual({ payload: 'payload' })
    });
});


