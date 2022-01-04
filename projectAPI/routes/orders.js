const express = require("express");
const router = express.Router();
const orderController = require("../controllers/orderController");
const { check } = require("express-validator");

router.get("/:id", orderController.getOrder);
router.get("/products/:id", orderController.getOrderProducts);

router.post(
    "/",
    [
        check("Voornaam").trim().not().isEmpty().withMessage("Mag niet leeg zijn."),
        check("Achternaam").trim().not().isEmpty().withMessage("Mag niet leeg zijn."),
        check("Email").trim().isEmail().normalizeEmail().withMessage("Moet een bestaant email bevatten."),
        check("Straat").trim().not().isEmpty().withMessage("Mag niet leeg zijn."),
        check("Huisnummer").trim().not().isEmpty().withMessage("Mag niet leeg zijn."),
        check("Telefoon").trim().isLength({ min: 10, max: 10 }).withMessage("Moet 10 karakters zijn."),
        check("Postcode").trim().isLength({ min: 4, max: 4 }).withMessage("Moet 4 karakters zijn."),
    ],
    orderController.createOrder
);
router.post("/products", orderController.createOrderProducts);

module.exports = router;
