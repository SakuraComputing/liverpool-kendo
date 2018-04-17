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
            <Link to="/photo" id="photo" className="bm-item-list" href="/photo">Photo's</Link>
            <Link to="/kendolink" id="kendolink" className="bm-item-list">Kendo Links</Link>
            <Link to="/video" id="video" className="bm-item-list">Videos</Link>
            <Link to='/study' id="kendostudy" className="bm-item-list">Kendo Study</Link>
            <Link to='/events' id="events" className="bm-item-list">Kendo Events</Link>
            <Link to='/board' id="boards" className="bm-item-list">Bulletin Board</Link>
            <a onClick={startLogout} className="bm-item-list" href="/">Log Out</a>
        </Menu>
);

export const mapDispatchToProps = (dispatch) => ({
    startLogout: () => dispatch(startLogout())
});

export default connect(undefined, mapDispatchToProps)(Sidebar);
