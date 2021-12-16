const image = {
    GetImage: (beeld) => {
        return new Promise((resolve, reject) => {
            resolve(`../public/images/${beeld}`);
        });
    },
};

module.exports = image;
