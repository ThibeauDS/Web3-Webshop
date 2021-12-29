import React from "react";
import { useSelector } from "react-redux";
import Product from "./Product";
import mainStyles from "./styles/Main.module.css";
import navigatieStyles from "./styles/Navigatie.module.css";
import winkelmandjeStyles from "./styles/Winkelmandje.module.css";

const Winkelmandje = () => {
    const productenState = useSelector((state) => state.producten);
    //console.log(productenState);

    return (
        <div className={mainStyles.body}>
            <div className={navigatieStyles.nav_insprong}>
                <h1>Winkelmandje</h1>
                <h2>Uw bestelling</h2>
                <div className={winkelmandjeStyles.kader}>
                    <>
                        {productenState.product.map((value, index) => (
                            <Product key={index} naam={value.Naam} beschrijving={value.Beschrijving} prijs={value.Prijs} beeld={value.Beeld} object={value} />
                        ))}
                    </>
                </div>
            </div>
        </div>
    );
};

export default Winkelmandje;
