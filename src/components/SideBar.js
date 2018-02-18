import React from 'react';
import { connect } from 'react-redux';
import { push as Menu } from 'react-burger-menu';
import { link } from 'react-router';
import { Link } from 'react-router-dom';
import {startLogout} from "../actions/auth";

export const Sidebar = ({ startLogout }) => (

        <Menu className="bm-menu"  noOverlay>
            <Link to="/dashboard" id="home" className="bm-item-list" href="/">Home</Link>
            <Link to="/about" id="what" className="bm-item-list" href="/">What is Kendo</Link>
            <a id="photo" className="bm-item-list" href="/">Photo's</a>
            <a onClick={startLogout} className="bm-item-list" href="/">Log Out</a>
        </Menu>
);

const mapDispatchToProps = (dispatch) => ({
    startLogout: () => dispatch(startLogout())
});

export default connect(undefined, mapDispatchToProps)(Sidebar);
