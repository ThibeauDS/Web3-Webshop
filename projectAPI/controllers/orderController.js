const order = require("../model/order");
const { validationResult } = require("express-validator");

const orderController = {
    getOrder: (req, res) => {
        const { id } = req.params;
        order
            .GetOrder(id)
            .then((results) => res.json(results))
            .catch((err) => res.status(500).send(`Error: ${err}`));
    },
    getOrderProducts: (req, res) => {
        const { id } = req.params;
        order
            .GetOrderProducts(id)
            .then((results) => res.json(results))
            .catch((err) => res.status(500).send(`Error: ${err}`));
    },
    createOrder: (req, res) => {
        if (validationResult(req).errors.length) {
            res.json(validationResult(req));
        }

        const { GemaaktOp, Voornaam, Achternaam, Straat, Huisnummer, Busnummer, Postcode, Telefoon, Email, TotalePrijs } = req.body;
        order
            .PostOrder(GemaaktOp, Voornaam, Achternaam, Straat, Huisnummer, Busnummer, Postcode, Telefoon, Email, TotalePrijs)
            .then((results) => res.json(results))
            .catch((err) => res.status(500).send(`Error: ${err}`));
    },
    createOrderProducts: (req, res) => {
        const { BestellingId, ProductId, Aantal, Prijs } = req.body;
        order
            .PostOrderProducts(BestellingId, ProductId, Aantal, Prijs)
            .then((results) => res.json(results))
            .catch((err) => res.status(500).send(`Error: ${err}`));
    },
};

module.exports = orderController;
