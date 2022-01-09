import { useFormik } from "formik";
import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router";
import { resetProducten } from "../store/producten/slice";
import Button from "./Button";
import * as Yup from "yup";
import mainStyles from "./styles/Main.module.css";
import navigatieStyles from "./styles/Navigatie.module.css";
import bevestigingStyles from "./styles/Bevestiging.module.css";
import winkelmandjeStyles from "./styles/Winkelmandje.module.css";
import TextBox from "./TextBox";
import PageLoading from "./PageLoading";
import Product from "./Product";
import Axios from "axios";

const required = "Dit is een verplicht veld.";
const schema = Yup.object().shape({
    voornaam: Yup.string().required(required),
    achternaam: Yup.string().required(required),
    email: Yup.string().email().required(required),
    telefoon: Yup.number().required(required),
    straat: Yup.string().required(required),
    huisnummer: Yup.number().required(required),
    busnummer: Yup.string().max(1),
    postcode: Yup.number().required(required),
});

const BedragBerekenen = (producten, aantallen) => {
    let prijs = 0;
    for (let index = 0; index < producten.length; index++) {
        prijs += producten[index].Prijs * aantallen[producten[index].Id];
    }
    return prijs.toFixed(2);
};

const Bevestiging = () => {
    const productenState = useSelector((state) => state.producten);
    const [isPageLoading, setIsPageLoading] = useState(true);
    const [producten, setProducten] = useState([]);
    const [productenAantal, setProductenAantal] = useState([]);
    const [totaalBedrag, setTotaalBedrag] = useState(0);
    let orderNumber;
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const { values, errors, handleChange, handleSubmit } = useFormik({
        initialValues: {
            voornaam: "",
            achternaam: "",
            email: "",
            telefoon: "",
            straat: "",
            huisnummer: "",
            busnummer: "",
            postcode: "",
        },
        onSubmit: (values) => {
            Axios({
                method: "post",
                url: "http://localhost:4000/confirm",
                data: {
                    GemaaktOp: new Date().toLocaleDateString(),
                    Voornaam: values.voornaam,
                    Achternaam: values.achternaam,
                    Straat: values.straat,
                    Huisnummer: values.huisnummer,
                    Busnummer: values.busnummer,
                    Postcode: values.postcode,
                    Telefoon: values.telefoon,
                    Email: values.email,
                    TotalePrijs: totaalBedrag,
                },
            })
                .then((response) => {
                    for (let index = 0; index < producten.length; index++) {
                        Axios({
                            method: "post",
                            url: "http://localhost:4000/confirm/products",
                            data: {
                                BestellingId: response.data.insertId,
                                ProductId: producten[index].Id,
                                Aantal: productenAantal[producten[index].Id],
                                Prijs: producten[index].Prijs,
                            },
                        }).catch((err) => {
                            console.log(err);
                        });
                    }
                    orderNumber = response.data.insertId;
                })
                .catch((err) => {
                    console.log(err);
                })
                .finally(() => {
                    dispatch(resetProducten());
                    navigate(`/order${orderNumber}`);
                });
        },
        validationSchema: schema,
    });

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
                    <h1>Bevestiging</h1>
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
                    <form onSubmit={handleSubmit}>
                        <div style={{ display: "flex" }}>
                            <TextBox header="Vul je voornaam in:" placeholder="Voornaam" name="voornaam" text={values.voornaam} onChange={handleChange} error={errors.voornaam} />
                            <TextBox header="Vul je achternaam in:" placeholder="Achternaam" name="achternaam" text={values.achternaam} onChange={handleChange} error={errors.achternaam} />
                        </div>
                        <div style={{ display: "flex" }}>
                            <TextBox header="Vul je email in:" placeholder="Email" name="email" text={values.email} onChange={handleChange} error={errors.email} />
                            <TextBox header="Vul je telefoon in:" placeholder="Telefoon" name="telefoon" text={values.telefoon} onChange={handleChange} error={errors.telefoon} />
                        </div>
                        <div style={{ display: "flex" }}>
                            <TextBox header="Vul je straat in:" placeholder="Straat" name="straat" text={values.straat} onChange={handleChange} error={errors.straat} />
                            <TextBox header="Vul je huisnummer in:" placeholder="Huisnummer" name="huisnummer" text={values.huisnummer} onChange={handleChange} error={errors.huisnummer} />
                        </div>
                        <div style={{ display: "flex" }}>
                            <TextBox header="Vul je busnummer in:" placeholder="Busnummer" name="busnummer" text={values.busnummer} onChange={handleChange} error={errors.busnummer} />
                            <TextBox header="Vul je postcode in:" placeholder="Postcode" name="postcode" text={values.postcode} onChange={handleChange} error={errors.postcode} />
                        </div>
                        <div style={{ textAlign: "right" }}>
                            <Button type="submit" content="Bevestig bestelling" variant="secondary" />
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Bevestiging;
