const db = require("../config/db");

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
    GetProductById: (id) => {
        return new Promise((resolve, reject) => {
            db.query("SELECT * FROM product WHERE Id = ?", [id], (err, results, fields) => {
                if (err) {
                    reject(err);
                }
                resolve(results);
            });
        });
    },
};

module.exports = product;
