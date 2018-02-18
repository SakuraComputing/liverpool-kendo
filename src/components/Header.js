import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { startLogout } from "../actions/auth";
import SideBar from './SideBar';

export const Header = ({ startLogout }) => (
    <header className="header">
        <div className="content-container">
            <div className="header__content">
                <Link className="header__title" to="/dashboard">
                    <h1>Liverpool Kendo Club</h1>
                </Link>
            </div>
        </div>
        <SideBar />
    </header>
);

const mapDispatchToProps = (dispatch) => ({
   startLogout: () => dispatch(startLogout())
});

export default connect(undefined, mapDispatchToProps)(Header);


