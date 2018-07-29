import React from 'react';
import { connect } from 'react-redux';
import { startLogin } from '../actions/auth';

export const LoginPage = ({startLogin}) => (
    <div className="box-layout">
        <div className="box-layout__box">
            <h1 className="box-layout__title">Liverpool Kendo Club</h1>
            <p className="box-layout__synopsis">"The way of the sword"</p>
            <button className="button button--with-icon" onClick={() => startLogin('google')}><i className="icon-prepend fa fa-google button-icon"/>
                Login with Google
            </button>
            <button className="button button--with-icon" style={{"background":"#4267b2"}} onClick={() => startLogin('facebook')}><i className="icon-prepend fa fa-facebook-f button-icon"/>
                Login with Facebook
            </button>
        </div>
    </div>
);

export const mapDispatchToProps = (dispatch) => ({
   startLogin: (provider) => dispatch(startLogin(provider))
});

export default connect(undefined, mapDispatchToProps)(LoginPage);

