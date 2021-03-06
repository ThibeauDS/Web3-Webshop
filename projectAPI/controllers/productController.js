const product = require("../model/product");

const productController = {
    GetAllProducts: (req, res) => {
        product
            .GetProducts()
            .then((results) => res.json(results))
            .catch((err) => res.status(500).send(`Error: ${err}`));
    },
    GetProductById: (req, res) => {
        const { id } = req.params;
        product
            .GetProductById(id)
            .then((results) => res.json(results))
            .catch((err) => res.status(500).send(`Error: ${err}`));
    },
};

module.exports = productController;
