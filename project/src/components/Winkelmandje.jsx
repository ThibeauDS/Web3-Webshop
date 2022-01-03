import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { resetProducten } from "../store/producten/slice";
import Button from "./Button";
import PageLoading from "./PageLoading";
import Product from "./Product";
import mainStyles from "./styles/Main.module.css";
import navigatieStyles from "./styles/Navigatie.module.css";
import winkelmandjeStyles from "./styles/Winkelmandje.module.css";

const BedragBerekenen = (producten, aantallen) => {
    let prijs = 0;
    for (let index = 0; index < producten.length; index++) {
        prijs += producten[index].Prijs * aantallen[producten[index].Id];
    }
    return prijs.toFixed(2);
};

const Winkelmandje = () => {
    const productenState = useSelector((state) => state.producten);
    const dispatch = useDispatch();
    const [isPageLoading, setIsPageLoading] = useState(true);
    const [producten, setProducten] = useState([]);
    const [productenAantal, setProductenAantal] = useState([]);
    const [totaalBedrag, setTotaalBedrag] = useState(0);
    let productenArray = [];
    let productenAantalArray = [];
    useEffect(() => {
        setIsPageLoading(true);
        for (let index = 0; index < productenState.length; index++) {
            if (
                !productenArray.some((element) => {
                    if (JSON.stringify(element) === JSON.stringify(productenState[index])) {
                        const x = productenAantalArray[productenState[index].Id];
                        productenAantalArray[productenState[index].Id] = x + 1;
                        return true;
                    } else {
                        return false;
                    }
                })
            ) {
                productenAantalArray[productenState[index].Id] = 1;
                productenArray.push(productenState[index]);
            }
        }
        setTotaalBedrag(BedragBerekenen(productenArray, productenAantalArray));
        setProductenAantal(productenAantalArray);
        setProducten(productenArray);
        setIsPageLoading(false);
    }, []);

    if (isPageLoading) {
        return (
            <div className={mainStyles.body}>
                <div className={navigatieStyles.nav_insprong}>
                    <h1>Winkelmandje</h1>
                    <h2>Uw bestelling</h2>
                    <div className={winkelmandjeStyles.kader}>
                        <PageLoading />
                    </div>
                </div>
            </div>
        );
    }
    if (producten.length === 0) {
        return (
            <div className={mainStyles.body}>
                <div className={navigatieStyles.nav_insprong}>
                    <h1>Winkelmandje</h1>
                    <h2>Uw bestelling</h2>
                    <div className={winkelmandjeStyles.kader}>
                        <p>Geen producten in het winkelmandje</p>
                    </div>
                </div>
            </div>
        );
    }
    return (
        <div className={mainStyles.body}>
            <div className={navigatieStyles.nav_insprong}>
                <div className={winkelmandjeStyles.container}>
                    <h1>Winkelmandje</h1>
                    <h2>Uw bestelling</h2>
                    <div className={winkelmandjeStyles.kader}>
                        {producten.map((value, index) => (
                            <Product key={index} naam={value.Naam} beschrijving={value.Beschrijving} prijs={value.Prijs} beeld={value.Beeld} aantal={productenAantal[value.Id]} />
                        ))}
                    </div>
                    <div style={{ textAlign: "right" }}>
                        <Button
                            content="Alles verwijderen"
                            title="Alle items in het winkelmandje verwijderen"
                            variant="danger"
                            onClick={() => {
                                dispatch(resetProducten());
                                window.location.reload(true);
                            }}
                        />
                    </div>
                    <div style={{ textAlign: "right" }}>
                        <p style={{ display: "inline-block", marginRight: 10, fontSize: "1.2em", fontWeight: "bold" }}>Totaal: {totaalBedrag}</p>
                        <Button content="Bestellen" title="Doorgaan met de bestelling" variant="primary" />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Winkelmandje;
