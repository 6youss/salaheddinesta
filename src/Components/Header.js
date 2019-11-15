import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../logo.svg';
import { Link as ScrollLink } from 'react-scroll'
 
function Header() {

    function handleSetActive(){        
    }

    return (
        <div id="left" className="column">
        <div className="top-left">
            <center>
            <img src={logo} alt={"logo"} className="logo"/>
            </center>
        </div>
        <div className="bottom">
            <ScrollLink activeClass="active" to="test1" spy={true} smooth={true} offset={50} duration={500} onSetActive={handleSetActive}>
                About me
            </ScrollLink>
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
