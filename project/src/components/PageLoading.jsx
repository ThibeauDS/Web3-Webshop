import React from "react";
import mainStyles from "./styles/Main.module.css";
import notFoundStyles from "./styles/NotFound.module.css";

const PageLoading = () => {
    return (
        <div className={(mainStyles.body, notFoundStyles.home, notFoundStyles.vh_100, notFoundStyles.align_items_center, notFoundStyles.d_flex)}>
            <div className={notFoundStyles.container_fluid}>
                <div className={(notFoundStyles.row, notFoundStyles.text_center)}>
                    <div className={(notFoundStyles.landing_text, notFoundStyles.kader)}>
                        <h1>Pagina wordt voorbereid, even geduld . . .</h1>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default PageLoading;
