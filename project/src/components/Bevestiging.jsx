import { useFormik } from "formik";
import React from "react";
import Button from "./Button";
import * as Yup from "yup";
import mainStyles from "./styles/Main.module.css";
import navigatieStyles from "./styles/Navigatie.module.css";
import TextBox from "./TextBox";

const required = "Dit is een verplicht veld.";
const schema = Yup.object().shape({
    voornaam: Yup.string().required(required),
    achternaam: Yup.string().required(required),
    email: Yup.string().email().required(required),
    telefoon: Yup.number().min(10).max(10).required(required),
    straat: Yup.string().required(required),
    huisnummer: Yup.number().required(required),
    busnummer: Yup.string().max(1).required(required),
    postcode: Yup.number().min(4).max(4).required(required),
});

const Bevestiging = () => {
    const { values, errors, handleChange, handleSubmit } = useFormik({
        initialValues: {
            voornaam: "",
            achternaam: "",
            email: "",
            telefoon: "",
            straat: "",
            huisnummer: "",
            postcode: "",
            checkbox: [],
        },
        onSubmit: (values) => {
            console.log(values);
        },
        validationSchema: schema,
    });

    return (
        <div className={mainStyles.body}>
            <div className={navigatieStyles.nav_insprong}>
                <h1>Bevestiging</h1>
                <h2>Uw bestelling</h2>
                <h2>Uw gegevens</h2>
                <form onSubmit={handleSubmit}>
                    <TextBox header="Vul je voornaam in:" placeholder="Voornaam" name="voornaam" value={values.voornaam} onChange={handleChange} />
                    {errors && errors.voornaam && <p style={{ color: "red" }}>{errors.voornaam}</p>}

                    <TextBox header="Vul je achternaam in:" placeholder="Achternaam" name="achternaam" value={values.achternaam} onChange={handleChange} />
                    {errors && errors.achternaam && <p style={{ color: "red" }}>{errors.achternaam}</p>}

                    <TextBox header="Vul je email in:" placeholder="Email" name="email" value={values.email} onChange={handleChange} />
                    {errors && errors.email && <p style={{ color: "red" }}>{errors.email}</p>}

                    <TextBox header="Vul je telefoon in:" placeholder="Telefoon" name="telefoon" value={values.telefoon} onChange={handleChange} />
                    {errors && errors.telefoon && <p style={{ color: "red" }}>{errors.telefoon}</p>}

                    <TextBox header="Vul je straat in:" placeholder="Straat" name="straat" value={values.straat} onChange={handleChange} />
                    {errors && errors.straat && <p style={{ color: "red" }}>{errors.straat}</p>}

                    <TextBox header="Vul je huisnummer in:" placeholder="Huisnummer" name="huisnummer" value={values.huisnummer} onChange={handleChange} />
                    {errors && errors.huisnummer && <p style={{ color: "red" }}>{errors.huisnummer}</p>}

                    <TextBox header="Vul je postcode in:" placeholder="Postcode" name="postcode" value={values.postcode} onChange={handleChange} />
                    {errors && errors.postcode && <p style={{ color: "red" }}>{errors.postcode}</p>}

                    <Button type="submit" content="Bevestig bestelling" variant="secondary" />
                </form>
            </div>
        </div>
    );
};

export default Bevestiging;
