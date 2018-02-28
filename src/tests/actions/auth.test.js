import { startLogin, login, startLogout, logout } from '../../actions/auth';


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
});

