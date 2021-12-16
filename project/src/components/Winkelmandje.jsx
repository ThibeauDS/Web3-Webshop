import React from "react";
import mainStyles from "./styles/Main.module.css";
import navigatieStyles from "./styles/Navigatie.module.css";

const Winkelmandje = () => {
    return (
        <div className={mainStyles.body}>
            <div className={navigatieStyles.nav_insprong}></div>
        </div>
    );
};

export default Winkelmandje;
