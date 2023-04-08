import React from "react";  
import "./Intro.css";
import Linkedin from '../../img/linkedin.png';
import Instagram from '../../img/instagram.png';
import Github from '../../img/github.png';

const Intro = () => {
    return (
        <div className="intro">
            <div className="i-left">
                <i className="i-name">
                    <span>Hola! Soy</span>
                    <span>Denise Burgos</span>
                    <span>Community Manager con mucha experiencia </span>
                </i>
            <button className="button i-button">
                Contáctame
            </button>
            <div className="i-icons">
                <a href=''>
                <img src={Github} alt="Github" />
                </a>
                <a href=''>
                <img src={Instagram} alt="Instagram" />
                </a>
                <a href=''>
                <img src={Linkedin} alt="Linkedin" />
                </a>
            </div>
            </div>
            <div className="i-right">
                Soy el lado derecho
            </div>
        </div>
    );
}



export default Intro;