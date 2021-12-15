import React from "react";
import "./styles/Navigatie.css";
import "./styles/Main.css";
import "./styles/NotFound.css";

const PageLoading = () => {
    return (
        <div className="body home vh-100 align-items-center d-flex">
            <div className="container-fluid">
                <div className="row text-center">
                    <div className="landing-text kader">
                        <h1>Pagina wordt voorbereid, even geduld . . .</h1>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default PageLoading;
