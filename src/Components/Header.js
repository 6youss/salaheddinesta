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
                <ScrollLink activeClass="active" to="about" containerId="containerElement" spy={true} smooth={true} offset={-10} duration={500} >
                    About me
                </ScrollLink>
                <ScrollLink activeClass="active" to="education" containerId="containerElement" spy={true} smooth={true} offset={-10} duration={500} >
                    Education
                </ScrollLink>
                <ScrollLink activeClass="active" to="experience" containerId="containerElement" spy={true} smooth={true} offset={-10} duration={500} >
                    Experience
                </ScrollLink>
                <ScrollLink activeClass="active" to="skills" containerId="containerElement" spy={true} smooth={true} offset={-10} duration={500} >
                    Skills
                </ScrollLink>
                <ScrollLink activeClass="active" to="portfolio" containerId="containerElement" spy={true} smooth={true} offset={-10} duration={500} >
                    Portfolio
                </ScrollLink>
                <ScrollLink activeClass="active" to="reaserch" containerId="containerElement" spy={true} smooth={true} offset={-10} duration={500} >
                    Reaserche Publication
                </ScrollLink>
                <ScrollLink activeClass="active" to="contact" containerId="containerElement" spy={true} smooth={true} offset={-10} duration={500} >
                    Contact 
                </ScrollLink>
            </div>
        </div>
    );
}

export default Header;
