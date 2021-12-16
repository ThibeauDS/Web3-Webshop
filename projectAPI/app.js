require("dotenv").config({ path: "./.env" });

const express = require("express");
const cookieParser = require("cookie-parser");
const logger = require("morgan");
const cors = require("cors");

const productsRouter = require("./routes/products");
const imagesRouter = require("./routes/images");

const app = express();

app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());

console.log(process.env.HOST);
console.log(process.env.USER);
console.log(process.env.PASSWORD);
console.log(process.env.DB);
console.log(process.env.PORT);

app.use(cors());
app.use("/products", productsRouter);
//app.use("/images", imagesRouter);
app.use("/images", express.static("public/images"));

console.log("API is running at port 4000");

module.exports = app;
