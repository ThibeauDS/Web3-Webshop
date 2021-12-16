import React, { useEffect, useState } from "react";
import Axios from "axios";
import PageLoading from "./PageLoading";
import Product from "./Product";

import mainStyles from "./styles/Main.module.css";
import navigatieStyles from "./styles/Navigatie.module.css";

const Producten = () => {
    const [isPageLoading, setIsPageLoading] = useState(true);
    const [producten, setProducten] = useState([]);

    useEffect(() => {
        setIsPageLoading(true);
        Axios.get(`http://localhost:4000/products`, {
            headers: {
                "Access-Control-Allow-Origin": true,
            },
        })
            .then((response) => {
                setProducten(response.data);
            })
            .catch((err) => {
                console.log(err);
            })
            .finally(() => {
                setIsPageLoading(false);
            });
    }, []);

    if (isPageLoading) {
        return (
            <div className={mainStyles.body}>
                <div className={navigatieStyles.nav_insprong}>
                    <h1>Producten</h1>
                    <PageLoading />
                </div>
            </div>
        );
    }

    return (
        <div className={mainStyles.body}>
            <div className={navigatieStyles.nav_insprong}>
                <h1>Producten</h1>
                <>
                    {producten.map((value, index) => (
                        <Product key={index} Naam={value.Naam} Beschrijving={value.Beschrijving} Prijs={value.Prijs} Beeld={value.Beeld} />
                    ))}
                </>
            </div>
        </div>
    );
};

export default Producten;
