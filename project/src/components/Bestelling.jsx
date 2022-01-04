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

const Bestelling = () => {
    const [isPageLoading, setIsPageLoading] = useState(true);
    const [gegevens, setGegevens] = useState({});
    const [producten, setProducten] = useState([]);
    const { id } = useParams();

    useEffect(() => {
        setIsPageLoading(true);
        Axios.get(`http://localhost:4000/order/${id}`)
            .then((response) => {
                setGegevens(response.data[0]);
                Axios.get(`http://localhost:4000/order/products/${response.data[0].Id}`)
                    .then((response) => {
                        console.log(response);
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

    return (
        <div className={mainStyles.body}>
            <div className={navigatieStyles.nav_insprong}>
                <div className={bevestigingStyles.container}>
                    <h1>Bestelling order#{id}</h1>
                    <h2>Uw bestelling</h2>
                    <div className={winkelmandjeStyles.kader}>
                        <p>Geen producten beschikbaar</p>
                    </div>
                    <div style={{ textAlign: "right" }}>
                        <p style={{ display: "inline-block", marginRight: 10, fontSize: "1.2em", fontWeight: "bold" }}>Totaal: 0</p>
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
