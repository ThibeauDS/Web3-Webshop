import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navigatie from "./components/Navigatie";
import Startpagina from "./components/Startpagina";
import Footer from "./components/Footer";
import Producten from "./components/Producten";
import NotFound from "./components/NotFound";
import Winkelmandje from "./components/Winkelmandje";

ReactDOM.render(
    <React.StrictMode>
        <BrowserRouter>
            <Navigatie />
            <Routes>
                <Route path="/" element={<Startpagina />} />
                <Route path="/products" element={<Producten />} />
                <Route path="/cart" element={<Winkelmandje />} />
                <Route path="*" element={<NotFound />} />
            </Routes>
            <Footer />
        </BrowserRouter>
    </React.StrictMode>,
    document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
