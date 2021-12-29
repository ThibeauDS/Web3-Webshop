import React from "react";
import { useDispatch } from "react-redux";
import { nieuwProductToevoegen } from "../store/producten/slice";
import Button from "./Button";
import productStyles from "./styles/Product.module.css";

const Product = ({ naam, beschrijving, prijs, beeld, object }) => {
    const array = beschrijving.split("\n");
    const dispatch = useDispatch();
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
                <Button content="In winkelmand" variant="primary" title="Voeg toe aan winkelmandje" onClick={() => dispatch(nieuwProductToevoegen(object))} />
            </div>
        </div>
    );
};

export default Product;
