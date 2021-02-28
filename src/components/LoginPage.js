import React from 'react';
import { connect } from 'react-redux';
import { startLogin } from '../actions/auth';
import Covid from '../components/Covid';

export const LoginPage = ({startLogin}) => (
    <div>
        <img src="/images/lkc_logo.jpg" alt="Liverpool Kendo Logo" className="logo"/>
        <div className="box-layout">
            <div className="box-layout__box">
                <h1 className="box-layout__title">Liverpool Kendo Club</h1>
                <p className="box-layout__synopsis">"The way of the sword"</p>
                <Covid />
            </div>
        </div>
        <div className="footer-buttons" >
            <button className="button button--with-icon" onClick={() => startLogin('google')}><i className="icon-prepend fa fa-google button-icon"/>
                Login with Google
            </button>
            <button className="button button--with-icon" style={{"background":"#4267b2"}} onClick={() => startLogin('facebook')}><i className="icon-prepend fa fa-facebook-f button-icon"/>
                Login with Facebook
            </button>
        </div>

        <a className="footer-text" href="http://www.britishkendoassociation.com" target="_Blank">Member of the British Kendo Association<img src="/images/bka_logo3.png" alt="BKA Logo" className="bka-logo"/></a>
    </div>
);

export const mapDispatchToProps = (dispatch) => ({
   startLogin: (provider) => dispatch(startLogin(provider))
});

export default connect(undefined, mapDispatchToProps)(LoginPage);

