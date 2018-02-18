import React from 'react';
import { push as Menu } from 'react-burger-menu'
import { link } from 'react-router';

class Sidebar extends React.Component {

    render () {
        return (
            <Menu className="bm-menu"  noOverlay>
                <a id="home" className="bm-item-list" href="/">Home</a>
                <a id="what" className="bm-item-list" href="/">What is Kendo</a>
                <a id="photo" className="bm-item-list" href="/">Photo's</a>
                <a id="logout" className="bm-item-list" href="/">Log Out</a>
            </Menu>
        );
    }
}
export default Sidebar;
