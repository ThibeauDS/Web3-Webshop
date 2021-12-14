import React, { useEffect, useState } from "react";
import Axios from "axios";
import "./styles/Main.css";
import PageLoading from "./PageLoading";
import Img from "../images/HMPDMM.jpg";

const Producten = () => {
    const [isPageLoading, setIsPageLoading] = useState(true);
    const [producten, setProducten] = useState([]);

    useEffect(() => {
        setIsPageLoading(true);
        Axios.get(`http://localhost:4000/products`)
            .then((response) => {
                //setProducten(response.data);
                console.log(response.data);
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
            <>
                <PageLoading />
            </>
        );
    }

    return (
        <div className="body">
            <div className="nav-insprong">
                <h1>Producten</h1>
                {/* <img src={Img} /> */}
                <img src="../images/HMPDMM.jpg" />
            </div>
        </div>
    );
};

export default Producten;
