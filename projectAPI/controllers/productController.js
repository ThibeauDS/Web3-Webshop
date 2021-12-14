const product = require("../model/product");
const { validationResult } = require("express-validator");

const productController = {
    GetAllProducts: (req, res) => {
        product
            .GetProducs()
            .then((results) => res.json(results))
            .catch((err) => res.status(500).send(`Error: ${err}`));
    },
};

module.export = productController;
