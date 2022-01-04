require("dotenv").config();

const express = require("express");
const cookieParser = require("cookie-parser");
const logger = require("morgan");
const cors = require("cors");

const productsRouter = require("./routes/products");
const orderRouter = require("./routes/orders");

const app = express();

app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());

app.use(cors());
app.use("/products", productsRouter);
app.use("/order", orderRouter);
app.use("/confirm", orderRouter);
app.use("/images", express.static("public/images"));

console.log("API is running at port 4000");

module.exports = app;
