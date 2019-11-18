import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../logo.svg';
import { Link as ScrollLink } from 'react-scroll'

function Header() {
    function handleSetActive(e){
    }

    return (
        <div id="left" className="column">
            <div className="top-left">
                <center>
                <img src={logo} alt={"logo"} className="logo"/>
                </center>
            </div>
            <div className="bottom">
                <ScrollLink activeClass="active" to="about" containerId="containerElement" spy={true} smooth={true} offset={-10} duration={500}>
                    <Link to="/">About me</Link> 
                </ScrollLink>
                <ScrollLink  to="education" containerId="containerElement" spy={true} smooth={true} offset={-10} duration={500}>
                    <Link to="/">Education</Link>
                </ScrollLink>
                <ScrollLink  to="experience" containerId="containerElement" spy={true} smooth={true} offset={-10} duration={500}>
                    <Link to="/">Experience</Link>
                </ScrollLink>
                <ScrollLink  to="skills" containerId="containerElement" spy={true} smooth={true} offset={-10} duration={500}>
                    <Link to="/">skills</Link>
                </ScrollLink>
                <ScrollLink  to="portfolio" containerId="containerElement" spy={true} smooth={true} offset={-10} duration={500}>
                    <Link to="/">Portfolio</Link>
                </ScrollLink>
                <ScrollLink  to="reaserch" containerId="containerElement" spy={true} smooth={true} offset={-10} duration={500}>
                    <Link to="/">Research publication</Link>
                </ScrollLink>
                <ScrollLink  to="contact" containerId="containerElement" spy={true} smooth={true} offset={-600} duration={500}>
                    <Link to="/">Contact </Link>
                </ScrollLink>
            </div>
        </div>
    );
}

export default Header;
