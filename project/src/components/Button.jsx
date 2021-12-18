import React from "react";
import buttonStyle from "./styles/Button.module.css";

const Button = ({ content, onClick, className, title }) => {
    const getButtonStyle = (className) => {
        switch (className) {
            case "primary":
                return buttonStyle.primary;

            case "secondary":
            default:
                return buttonStyle.secondary;
        }
    };
    return (
        <button onClick={onClick} className={getButtonStyle(className)} title={title}>
            {content}
        </button>
    );
};

export default Button;
