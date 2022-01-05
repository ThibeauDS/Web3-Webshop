const express = require("express");
const router = express.Router();
const productController = require("../controllers/productController");

router.get("/", productController.GetAllProducts);
router.get("/:id", productController.GetProductById);

module.exports = router;
