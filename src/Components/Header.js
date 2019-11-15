import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../logo.svg';

function Header() {
    return (
        <div id="left" className="column">
        <div className="top-left">
            <center>
            <img src={logo} alt={"logo"} className="logo"/>
            </center>
        </div>
        <div className="bottom">
            <Link to="/">About me</Link>
            <Link to="/">Education</Link>
            <Link to="/">Experience</Link>
            <Link to="/">Skills</Link>
            <Link to="/Portfolio_ReactApp">Portfolio</Link>
            <Link to="/">Reaserche Publication</Link>
            <Link to="/">Contact</Link>
        </div>
    </div>
    );
}

export default Header;
