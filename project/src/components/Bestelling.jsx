import React, { useEffect, useState } from "react";
import mainStyles from "./styles/Main.module.css";
import navigatieStyles from "./styles/Navigatie.module.css";
import bevestigingStyles from "./styles/Bevestiging.module.css";
import winkelmandjeStyles from "./styles/Winkelmandje.module.css";
import TextBox from "./TextBox";
import PageLoading from "./PageLoading";
import Product from "./Product";
import Axios from "axios";
import { useParams } from "react-router-dom";

const BedragBerekenen = (producten, aantallen) => {
    let prijs = 0;
    for (let index = 0; index < producten.length; index++) {
        prijs += producten[index].Prijs * aantallen[producten[index].Id];
    }
    return prijs.toFixed(2);
};

const Bestelling = () => {
    const [isPageLoading, setIsPageLoading] = useState(true);
    const [gegevens, setGegevens] = useState({});
    const [producten, setProducten] = useState([]);
    const [productenAantal, setProductenAantal] = useState([]);
    const [totaalBedrag, setTotaalBedrag] = useState(0);
    let productenArray = [];
    let productenAantalArray = [];
    const { id } = useParams();

    useEffect(() => {
        setIsPageLoading(true);
        Axios.get(`http://localhost:4000/order/${id}`)
            .then((response) => {
                setGegevens(response.data[0]);
                Axios.get(`http://localhost:4000/order/products/${response.data[0].Id}`)
                    .then((response) => {
                        const data = response.data;
                        for (let index = 0; index < data.length; index++) {
                            Axios.get(`http://localhost:4000/products/${data[index].ProductId}`).then((response) => {
                                const product = response.data;
                                productenAantalArray[data[index].ProductId] = data[index].Aantal;
                                productenArray.push(product[0]);
                                if (index === data.length - 1) {
                                    setTotaalBedrag(BedragBerekenen(productenArray, productenAantalArray));
                                    setProducten(productenArray);
                                    setProductenAantal(productenAantalArray);
                                }
                            });
                        }
                    })
                    .catch((err) => {
                        console.log(err);
                    });
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
                    <div className={winkelmandjeStyles.container}>
                        <h1>Winkelmandje</h1>
                        <h2>Uw bestelling</h2>
                        <div className={winkelmandjeStyles.kader}>
                            <PageLoading />
                        </div>
                    </div>
                </div>
            </div>
        );
    }

    if (producten.length === 0) {
        return (
            <div className={mainStyles.body}>
                <div className={navigatieStyles.nav_insprong}>
                    <div className={bevestigingStyles.container}>
                        <h1>Bestelling order#{id}</h1>
                        <h2>Uw bestelling</h2>
                        <div className={winkelmandjeStyles.kader}>
                            <p>Geen producten om weer te geven</p>
                        </div>
                        <div style={{ textAlign: "right" }}>
                            <p style={{ display: "inline-block", marginRight: 10, fontSize: "1.2em", fontWeight: "bold" }}>Totaal: {totaalBedrag}</p>
                        </div>
                        <h2>Uw gegevens</h2>
                        <form>
                            <div style={{ display: "flex" }}>
                                <TextBox header="Voornaam" text={gegevens.Voornaam} name="voornaam" IsReadOnly />
                                <TextBox header="Achternaam" text={gegevens.Achternaam} name="achternaam" IsReadOnly />
                            </div>
                            <div style={{ display: "flex" }}>
                                <TextBox header="Email" text={gegevens.Email} name="email" IsReadOnly />
                                <TextBox header="Telefoon" text={gegevens.Telefoon} name="telefoon" IsReadOnly />
                            </div>
                            <div style={{ display: "flex" }}>
                                <TextBox header="Straat" text={gegevens.Straat} name="straat" IsReadOnly />
                                <TextBox header="Huisnummer" text={gegevens.Huisnummer} name="huisnummer" IsReadOnly />
                            </div>
                            <div style={{ display: "flex" }}>
                                <TextBox header="Busnummer" text={gegevens.Busnummer} name="busnummer" IsReadOnly />
                                <TextBox header="Postcode" text={gegevens.Postcode} name="postcode" IsReadOnly />
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        );
    }

    return (
        <div className={mainStyles.body}>
            <div className={navigatieStyles.nav_insprong}>
                <div className={bevestigingStyles.container}>
                    <h1>Bestelling order#{id}</h1>
                    <h2>Uw bestelling</h2>
                    <div className={winkelmandjeStyles.kader}>
                        {producten.map((value, index) => (
                            <Product key={index} naam={value.Naam} beschrijving={value.Beschrijving} prijs={value.Prijs} beeld={value.Beeld} aantal={productenAantal[value.Id]} />
                        ))}
                    </div>
                    <div style={{ textAlign: "right" }}>
                        <p style={{ display: "inline-block", marginRight: 10, fontSize: "1.2em", fontWeight: "bold" }}>Totaal: {totaalBedrag}</p>
                    </div>
                    <h2>Uw gegevens</h2>
                    <form>
                        <div style={{ display: "flex" }}>
                            <TextBox header="Voornaam" text={gegevens.Voornaam} name="voornaam" IsReadOnly />
                            <TextBox header="Achternaam" text={gegevens.Achternaam} name="achternaam" IsReadOnly />
                        </div>
                        <div style={{ display: "flex" }}>
                            <TextBox header="Email" text={gegevens.Email} name="email" IsReadOnly />
                            <TextBox header="Telefoon" text={gegevens.Telefoon} name="telefoon" IsReadOnly />
                        </div>
                        <div style={{ display: "flex" }}>
                            <TextBox header="Straat" text={gegevens.Straat} name="straat" IsReadOnly />
                            <TextBox header="Huisnummer" text={gegevens.Huisnummer} name="huisnummer" IsReadOnly />
                        </div>
                        <div style={{ display: "flex" }}>
                            <TextBox header="Busnummer" text={gegevens.Busnummer} name="busnummer" IsReadOnly />
                            <TextBox header="Postcode" text={gegevens.Postcode} name="postcode" IsReadOnly />
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Bestelling;
