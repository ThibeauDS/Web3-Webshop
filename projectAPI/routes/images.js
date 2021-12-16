const express = require("express");
const router = express.Router();
const imageController = require("../controllers/imageController");

router.get("/:name", imageController.GetImageByName);

module.exports = router;
