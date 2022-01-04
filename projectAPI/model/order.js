const db = require("../config/db");

const order = {
    PostOrder: (gemaaktOp, voornaam, achternaam, straat, huisnummer, busnummer, postcode, telefoon, email, totalePrijs) => {
        return new Promise((resolve, reject) => {
            db.query(
                "INSERT INTO bestelling (GemaaktOp, Voornaam, Achternaam, Straat, Huisnummer, Busnummer, Postcode, Telefoon, Email, TotalePrijs) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?)",
                [gemaaktOp, voornaam, achternaam, straat, huisnummer, busnummer, postcode, telefoon, email, totalePrijs],
                (err, results, fields) => {
                    if (err) {
                        reject(err);
                    }
                    resolve(results);
                }
            );
        });
    },
    PostOrderProducts: (bestellingId, productId, aantal, prijs) => {
        return new Promise((resolve, reject) => {
            db.query("INSERT INTO bestellingproduct (BestellingId, ProductId, Aantal, Prijs) VALUES (?, ?, ?, ?)", [bestellingId, productId, aantal, prijs], (err, results, fields) => {
                if (err) {
                    reject(err);
                }
                resolve(results);
            });
        });
    },
    GetOrder: (id) => {
        return new Promise((resolve, reject) => {
            db.query("SELECT * FROM bestelling WHERE Id = ?", [id], (err, results, fields) => {
                if (err) {
                    reject(err);
                }
                resolve(results);
            });
        });
    },
    GetOrderProducts: (id) => {
        return new Promise((resolve, reject) => {
            db.query("SELECT * FROM bestellingproduct WHERE BestellingId = ?", [id], (err, results, fields) => {
                if (err) {
                    reject(err);
                }
                resolve(results);
            });
        });
    },
};

module.exports = order;
