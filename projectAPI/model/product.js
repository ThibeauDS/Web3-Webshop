const db = require("../config/db");

const product = {
    GetProducs: () => {
        return new Promise((resolve, reject) => {
            db.query("SELECT * FROM product", (err, results, fields) => {
                if (err) {
                    reject(err);
                    console.log(err);
                }
                console.log(results);
                resolve(results);
            });
        });
    },
};

module.export = product;
