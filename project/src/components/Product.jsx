import React from "react";

const Product = ({ Naam, Beschrijving, Prijs, Beeld }) => {
    return (
        <div style={{ border: "1px solid black", borderRadius: 4 }}>
            <h1>{Naam}</h1>
            <h2>{Beschrijving}</h2>
            <h3>{Prijs}</h3>
            <img src={require(Beeld)} alt={Naam} />
        </div>
    );
};

export default Product;
