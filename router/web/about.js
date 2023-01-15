const express = require("express");
const { aboutController } = require("../../controller/web/about");

const router = express.Router();

router.get("/", aboutController);

module.exports = router;
