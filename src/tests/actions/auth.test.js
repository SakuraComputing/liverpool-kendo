import { startLogin, login, startLogout, logout, registerUser } from '../../actions/auth';


describe('authorisation action object', () => {
    it('should setup the login action object', () => {
        const uid = '4r447ffuf';
        const action = login(uid);
        expect(action).toEqual({
           type: 'LOGIN',
           uid: uid
        })
    });
    it('should call firebase login according to given provider', () => {
        const call = startLogin('google');
        expect(call).toEqual(expect.any(Function));
    });

    it('should setup logout action object', () => {
        const action = logout();
        expect(action).toEqual({ type: 'LOGOUT'})
    });

    it('should call firebase logout', () => {
        const call = startLogout();
        expect(call).toEqual(expect.any(Function));
    });
    it('should set up the register user object', () => {
        const userData = {
          userId: 'test',
          email: 'test@test.com',
          password: '5445gkfkds'
        };
       const action = registerUser(userData);
       expect(action).toEqual({
           type: 'REGISTER',
           userData: userData
       });
    });
});

