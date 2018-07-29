// Modules
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
// React
import AppRouter, { history } from './routers/AppRouter';
import LoadingPage from './components/LoadingPage';
// Redux
import store from './store/configureStore';
import { login, logout } from './actions/auth';

// CSS
import 'normalize.css/normalize.css';
import './styles/styles.scss';
import 'react-dates/lib/css/_datepicker.css';

// Firebase
import { firebase } from './firebase/firebase';

store.getState();

// const store = configureStore();

const jsx = (
    <Provider store={store}>
        <AppRouter />
    </Provider>
);

const rootApp = document.getElementById('app')

let hasRendered = false;
const renderApp = ()=> {
  if (!hasRendered) {
      ReactDOM.render(jsx, rootApp);
      hasRendered = true;
  }
};

// Add deployment
ReactDOM.render(<LoadingPage />, rootApp);

firebase.auth().onAuthStateChanged((user) => {
   if(user) {
       const { currentUser } = firebase.auth();
       currentUser.providerData.forEach((profile) => {
           // console.log(`Sign-in provider:  ${profile.providerId}`);
           // console.log(`Provider-specific UID: ${profile.uid}`);
           // console.log(`Name: ${profile.displayName}`);
           // console.log(`Email: ${profile.email}`);
           // console.log(`Photo URL: ${profile.photoURL}`);
       });
        store.dispatch(login(user.uid, currentUser));
        renderApp();
        if (history.location.pathname === '/') {
            history.push('/dashboard');
        }
   } else {
       store.dispatch(logout());
       renderApp();
       history.push('/');
   }
});

