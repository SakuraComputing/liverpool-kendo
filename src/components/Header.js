import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import SideBar from './SideBar';

import { startLogout } from '../actions/auth';

export const Header = ({ dispatchStartLogoutProp, currentUser }) => (
  <header className="header">
    <div className="content-container">
      <div className="header__content">
        <Link className="header__title" to="/dashboard">
          <h1>Liverpool Kendo Club</h1>
        </Link>
        <div className="header_logout-justify">
          <span className="header__displayName">
            {currentUser.displayName || currentUser.email}
          </span>
          <br />

          <button
            className="button button--link"
            onClick={dispatchStartLogoutProp}
          >
            {' '}
            Logout
          </button>
        </div>
      </div>
    </div>
    <SideBar />
  </header>
);

const mapStateToProps = (state) => ({
  currentUser: state.auth.currentUser,
});
export const mapDispatchToProps = (dispatch) => ({
  dispatchStartLogoutProp: () => dispatch(startLogout()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Header);
