import React from "react";
import buttonStyle from "./styles/Button.module.css";

const Button = ({ content, onClick, variant, title, type }) => {
    const getButtonStyle = (variant) => {
        switch (variant) {
            case "primary":
                return buttonStyle.primary;

            case "secondary":
            default:
                return buttonStyle.secondary;
        }
    };
    return (
        <button onClick={onClick} className={getButtonStyle(variant)} title={title} type={type}>
            {content}
        </button>
    );
};

export default Button;
