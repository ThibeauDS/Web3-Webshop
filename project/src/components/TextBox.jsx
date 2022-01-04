import React from "react";
import textBoxStyles from "./styles/TextBox.module.css";

const TextBox = ({ name, text, onChange, placeholder, header, error, IsReadOnly }) => {
    if ((error !== undefined && header === undefined) || header.length === 0) {
        return (
            <div>
                <input type="text" name={name} id={name} value={text} onChange={onChange} placeholder={placeholder} className={textBoxStyles}></input>
                <p style={{ color: "red" }}>{error}</p>
            </div>
        );
    }
    if (error !== undefined) {
        return (
            <div>
                <label htmlFor={name} style={{ display: "block" }}>
                    {header}
                </label>
                <input type="text" name={name} id={name} value={text} onChange={onChange} placeholder={placeholder} className={textBoxStyles}></input>
                <p style={{ color: "red" }}>{error}</p>
            </div>
        );
    }
    if (header === undefined || header.length === 0) {
        return <input type="text" name={name} id={name} value={text} onChange={onChange} placeholder={placeholder} className={textBoxStyles}></input>;
    }
    if (IsReadOnly) {
        return (
            <div>
                <label htmlFor={name} style={{ display: "block" }}>
                    {header}
                </label>
                <input type="text" name={name} id={name} value={text} onChange={onChange} placeholder={placeholder} readOnly="readonly" className={textBoxStyles}></input>
            </div>
        );
    }
    return (
        <div>
            <label htmlFor={name} style={{ display: "block" }}>
                {header}
            </label>
            <input type="text" name={name} id={name} value={text} onChange={onChange} placeholder={placeholder} className={textBoxStyles}></input>
        </div>
    );
};

export default TextBox;
