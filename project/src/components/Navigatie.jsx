import React from 'react';
import { NavLink } from 'react-router-dom';
import './styles/Navigatie.css';
import './styles/Main.css';

const Navigatie = () => {
    return (
        <nav>
            <NavLink className="nav-item" to="/">
                Startpagina
            </NavLink>
            <NavLink className="nav-item" to="/products">
                Producten
            </NavLink>
            <NavLink className="nav-item text-align-right" to="/cart">
                Winkelmandje
            </NavLink>
        </nav>
    );
};

export default Navigatie;
