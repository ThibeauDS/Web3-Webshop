import React from 'react';
import './styles/Navigatie.css';
import './styles/Main.css';
import './styles/NotFound.css';

const NotFound = () => {
    return (
        <div className="body home vh-100 align-items-center d-flex">
            <div className="container-fluid">
                <div className="row text-center">
                    <div className="landing-text kader">
                        <h1>Oopsie, pagina niet gevonden...</h1>
                        <ul>
                            <li>Controleer uw netwerk verbinding</li>
                            <li>Is het pad in de zoekbalk wel correct</li>
                            <li>Controleer of er geen typfouten zijn</li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default NotFound;
