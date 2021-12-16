import React from "react";
import { NavLink } from "react-router-dom";
import navigatieStyles from "./styles/Navigatie.module.css";

const getStyleForActive = ({ isActive }) => {
    return {
        className: isActive ? `${navigatieStyles.active} ${navigatieStyles.nav_item}` : navigatieStyles.nav_item,
    };
};

const Navigatie = () => {
    return (
        <nav className={navigatieStyles.nav}>
            <NavLink className={getStyleForActive} to="/">
                Startpagina
            </NavLink>
            <NavLink className={getStyleForActive} to="/products">
                Producten
            </NavLink>
            <NavLink className={getStyleForActive} to="/cart">
                Winkelmandje
            </NavLink>
        </nav>
    );
};

export default Navigatie;
