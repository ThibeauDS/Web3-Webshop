import React from "react";
import textBoxStyles from "./styles/TextBox.module.css";

const TextBox = ({ name, value, onChange, placeholder, header }) => {
    if (header === undefined || header.length === 0) {
        return <input type="text" name={name} id={name} value={value} onChange={onChange} placeholder={placeholder} className={textBoxStyles}></input>;
    }
    return (
        <>
            <label htmlFor={name} style={{ display: "block" }}>
                {header}
            </label>
            <input type="text" name={name} id={name} value={value} onChange={onChange} placeholder={placeholder} className={textBoxStyles}></input>
        </>
    );
};

export default TextBox;
