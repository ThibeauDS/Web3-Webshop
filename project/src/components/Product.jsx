import React from "react";
import Button from "./Button";
import productStyles from "./styles/Product.module.css";

const Product = ({ naam, beschrijving, prijs, beeld }) => {
    const array = beschrijving.split("\n");
    return (
        <div className={productStyles.kader}>
            <div className={productStyles.content}>
                <img src={beeld} className={productStyles.beeld} alt={naam} />
                <div>
                    <p className={productStyles.titel}>{naam}</p>
                    <p className={productStyles.beschrijving}>{array.reduce((el, a) => el.concat(a, <br />), [])}</p>
                </div>
            </div>
            <div style={{ marginLeft: 20, textAlign: "right" }}>
                <p className={`${productStyles.prijs}`}>{prijs.replace(/\./i, ",")}</p>
                <Button content="In winkelmand" variant="primary" title="Voeg toe aan winkelmandje" />
            </div>
        </div>
    );
};

export default Product;
