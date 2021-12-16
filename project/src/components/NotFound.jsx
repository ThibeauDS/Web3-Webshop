import React from "react";
import mainStyles from "./styles/Main.module.css";
import notFoundStyles from "./styles/NotFound.module.css";

const NotFound = () => {
    return (
        <div className={(mainStyles.body, notFoundStyles.home, notFoundStyles.vh_100, notFoundStyles.align_items_center, notFoundStyles.d_flex)}>
            <div className={notFoundStyles.container_fluid}>
                <div className={(notFoundStyles.row, notFoundStyles.text_center)}>
                    <div className={(notFoundStyles.landing_text, notFoundStyles.kader)}>
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
