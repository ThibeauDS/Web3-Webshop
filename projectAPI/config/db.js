const mysql = require("mysql2");

const pool = mysql.createPool({
    host: process.env.HOST || "localhost",
    user: process.env.USER || "root",
    password: process.env.PASSWORD || "root",
    database: process.env.DB || "web3webshop",
    connectionLimit: 10,
});

module.exports = pool;
