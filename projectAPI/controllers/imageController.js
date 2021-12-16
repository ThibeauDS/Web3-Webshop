const image = require("../model/image");

const imageController = {
    GetImageByName: (req, res) => {
        const { name } = req.params;
        image
            .GetImage(name)
            .then((results) => res.send(results))
            .catch((err) => res.status(500).send(`Error: ${err}`));
    },
};

module.exports = imageController;
