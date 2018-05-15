import { firebase, googleAuthProvider, facebookAuthProvider } from '../firebase/firebase';


export const registerUser = (userData) => ({
    type: 'REGISTER',
    userData
});

export const login = (uid, currentUser) => ({
    type: 'LOGIN',
    uid,
    currentUser,
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

export const createLoginEmail = (email, password) => {
    return () => {
        return firebase.auth().createUserWithEmailAndPassword(email, password).catch((e) => {
            return e;
        });
    };
};

export const startLoginEmail = (email, password) => {
    return () => {
        return firebase.auth().signInWithEmailAndPassword(email, password).catch((e) => {
            return e;
        });
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
