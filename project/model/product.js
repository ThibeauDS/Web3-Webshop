const db = require("../config/db");

export const product = {
    GetProducs: () => {
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
