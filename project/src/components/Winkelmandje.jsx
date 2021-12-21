import React from "react";
import mainStyles from "./styles/Main.module.css";
import navigatieStyles from "./styles/Navigatie.module.css";

const Winkelmandje = () => {
    return (
        <div className={mainStyles.body}>
            <div className={navigatieStyles.nav_insprong}>
                <h1>Winkelmandje</h1>
            </div>
        </div>
    );
};

export default Winkelmandje;
