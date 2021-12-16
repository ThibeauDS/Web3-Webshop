import React from "react";
import productStyles from "./styles/Product.module.css";

const Product = ({ Naam, Beschrijving, Prijs, Beeld }) => {
    return (
        <div style={productStyles.kader}>
            <h1>{Naam}</h1>
            <h2>{Beschrijving}</h2>
            <h3>{Prijs}</h3>
            <img src={Beeld} alt={Naam} />
        </div>
    );
};

export default Product;
