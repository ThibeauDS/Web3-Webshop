const db = require("../config/db.js");

const product = {
    GetProducts: () => {
        return new Promise((resolve, reject) => {
            db.query("SELECT * FROM product", (err, results, fields) => {
                if (err) {
                    reject(err);
                }
                resolve(results);
            });
        });
    },
};

module.exports = product;
