import React, { Component } from 'react';
import './Navbar.css';

export default class Navbar extends Component {

    render() {
        return (
            <div>
                <div className="navbar">
                    <div className="nav-title">
                        Start Bootstrap
                </div>
                    <div className="nav-items">
                        <span>SERVICES</span>
                        <span>PORTFOLIO</span>
                        <span>ABOUT</span>
                        <span>TEAM</span>
                        <span>CONTACT</span>

                        <i class="fas fa-bars"></i>
                    </div>

                </div>
                <header className="Header">
                </header>
            </div>
        );
    }
}