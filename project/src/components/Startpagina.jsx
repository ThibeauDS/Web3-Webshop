import React from "react";
import "./styles/Navigatie.css";
import "./styles/Main.css";
import "./styles/Startpagina.css";

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
        <div className="body">
            <div className="nav-insprong">
                <h1>Welkom bij de super webshop van Web - 3</h1>
                <h2>Wat is super webshop</h2>
                <p>De super webshop is een eind werk voor het vak Web - 3.</p>
                <p>Deze app is ontwikkeld dankzij de magie van React. React is ontwikkeld door Facebook.</p>
                <h2>Het team achter super webshop</h2>
                <p>De react app wordt ontwikkeld door Thibeau De Smet. Een student aan HOGENT die de richting Graduaat - Programmeren volgt.</p>
                <h3>Gebruikte dependencies</h3>
                <ul>
                    {dependencies.map((value, index) => (
                        <li key={index} className="li">
                            {value.name}: {value.versie}
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
};

export default Startpagina;
