import React from 'react';
import { Link } from 'react-router-dom';
import SideBar from './SideBar';

export const Header = () => (
    <header className="header">
        <div className="content-container">
            <div className="header__content">
                <Link className="header__title" to="/dashboard">
                    <h1>Liverpool Kendo Club</h1>
                </Link>
                <img src="/images/lkc_logo.jpg" alt="lkc_logo" className="header__icon" />
            </div>
        </div>
        <SideBar />
    </header>
);

export default Header;


