var express = require("express");
var router = express.Router();
const productController = require("../controllers/productController");

router.get("/products", productController.GetAllProducts);

module.exports = router;