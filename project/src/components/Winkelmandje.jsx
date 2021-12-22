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
    postcode: Yup.number().min(4).max(4).required(required),
});

const Winkelmandje = () => {
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
                <h1>Winkelmandje</h1>
                <h2>Uw bestelling</h2>
                <h2>Uw gegevens</h2>
                <form onSubmit={handleSubmit}>
                    <>
                        <TextBox header="Vul je voornaam in:" placeholder="Voornaam" name="voornaam" value={values.voornaam} onChange={handleChange} />
                        {errors && errors.voornaam && <p style={{ color: "red" }}>{errors.voornaam}</p>}
                    </>
                    <Button type="submit" content="Bevestig bestelling" variant="secondary" />
                </form>
            </div>
        </div>
    );
};

export default Winkelmandje;
