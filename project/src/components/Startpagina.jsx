import React from "react";

import mainStyles from "./styles/Main.module.css";
import navigatieStyles from "./styles/Navigatie.module.css";
import startpaginaStyles from "./styles/Startpagina.module.css";

const Startpagina = () => {
    const dependencies = [
        {
            name: "@reduxjs/toolkit",
            versie: "^1.6.2",
        },
        {
            name: "@testing-library/jest-dom",
            versie: "^5.16.1",
        },
        {
            name: "@testing-library/react",
            versie: "^11.2.7",
        },
        {
            name: "@testing-library/user-event",
            versie: "^12.8.3",
        },
        {
            name: "axios",
            versie: "^0.24.0",
        },
        {
            name: "dotenv",
            versie: "^10.0.0",
        },
        {
            name: "express",
            versie: "~4.16.1",
        },
        {
            name: "express-validator",
            versie: "^6.13.0",
        },
        {
            name: "lodash",
            versie: "^4.17.21",
        },
        {
            name: "mysql2",
            versie: "^2.3.2",
        },
        {
            name: "react",
            versie: "^17.0.2",
        },
        {
            name: "react-dom",
            versie: "^17.0.2",
        },
        {
            name: "react-redux",
            versie: "^7.2.6",
        },
        {
            name: "react-router-dom",
            versie: "^6.0.2",
        },
        {
            name: "react-scripts",
            versie: "4.0.3",
        },
        {
            name: "redux",
            versie: "^4.1.2",
        },
        {
            name: "web-vitals",
            versie: "^1.1.2",
        },
    ];

    return (
        <div className={mainStyles.body}>
            <div className={navigatieStyles.nav_insprong}>
                <div className={startpaginaStyles.container}>
                    <h1>Welkom bij de super webshop van Web - 3</h1>
                    <h2>Wat is super webshop</h2>
                    <p>De super webshop is een eind werk voor het vak Web - 3.</p>
                    <p>Deze app is ontwikkeld dankzij de magie van React. React is ontwikkeld door Facebook.</p>
                    <h2>Het team achter super webshop</h2>
                    <p>De react app wordt ontwikkeld door Thibeau De Smet. Een student aan HOGENT die de richting Graduaat - Programmeren volgt.</p>
                    <h3>Gebruikte dependencies</h3>
                    <ul className={startpaginaStyles.ul}>
                        {dependencies.map((value, index) => (
                            <li key={index} className={startpaginaStyles.li}>
                                {value.name}: {value.versie}
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Startpagina;
