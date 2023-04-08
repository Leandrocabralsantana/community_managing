import React from 'react';
import './NavBar.css';

const Navbar = () => {
    return (

        <div className="n-wrapper">
            <div className="n-left">
                <div className="n-name">Denise</div>
                <span>toggle</span>
            </div>
            <div className="n-right">
                <div className="n-list">
                    <ul style={{listStyleType:'none'}}>
                        <li>Inicio</li>
                        <li>Servicios</li>
                        <li>Clientes</li>
                        <li>Portafolio</li>
                        <li>Comentarios</li>
                    </ul>
                </div>
                <button className="button n-button">
                    Contáctame
                </button>
            </div>

        </div>

        )

}


export default Navbar;