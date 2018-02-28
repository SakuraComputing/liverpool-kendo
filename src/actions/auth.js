import { firebase, googleAuthProvider, facebookAuthProvider } from '../firebase/firebase';

export const login = (uid) => ({
    type: 'LOGIN',
    uid
});

export const startLogin = (provider) => {
  return (dispatch) => {
      switch (provider) {
          case 'google':
            return firebase.auth().signInWithPopup(googleAuthProvider);
          case 'facebook':
            return firebase.auth().signInWithPopup(facebookAuthProvider);
      }
  };
};

export const logout = () => ({
  type: 'LOGOUT'
});

export const startLogout = () => {
  return () => {
    return firebase.auth().signOut();
  };
};
