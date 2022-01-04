import React from "react";
import { NavLink } from "react-router-dom";
import buttonStyle from "./styles/Button.module.css";

const Button = ({ content, onClick, variant, title, type, herf }) => {
    const getButtonStyle = (variant) => {
        switch (variant) {
            case "primary":
                return buttonStyle.primary;

            case "secondary":
            default:
                return buttonStyle.secondary;
            case "danger":
                return buttonStyle.danger;
        }
    };
    const getStyleForActive = ({ isActive }) => {
        return {
            color: isActive ? "lightgray" : "white",
        };
    };
    if (herf !== undefined && onClick !== undefined) {
        return (
            <NavLink style={getStyleForActive} to={herf}>
                <button className={getButtonStyle(variant)} title={title}>
                    {content}
                </button>
            </NavLink>
        );
    }
    if (herf !== undefined) {
        return (
            <NavLink style={getStyleForActive} to={herf}>
                <button className={getButtonStyle(variant)} title={title}>
                    {content}
                </button>
            </NavLink>
        );
    }
    return (
        <button onClick={onClick} className={getButtonStyle(variant)} title={title} type={type}>
            {content}
        </button>
    );
};

export default Button;
