import React from 'react';
import { slide as Menu } from 'react-burger-menu'
import { link } from 'react-router';

class MainMenu extends React.Component {

    showSettings (event) {
        event.preventDefault();
        alert('show settings');
    }

    render () {
        return (
            <Menu className="main-menu" width={ '50px' }>
                <a id="home" className="menu-item" href="/">Home</a>
                <a id="about" to="/about" className="menu-item" href="/about">About</a>
                <a id="contact" className="menu-item" href="/contact">Contact</a>
                <a onClick={ this.showSettings } className="menu-item--small" href="">Settings</a>
            </Menu>
        );
    }
}
export default MainMenu
