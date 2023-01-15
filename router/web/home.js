const express = require("express");
const { homeController } = require("../../controller/web/home");

const router = express.Router();

// LocalHost:1200
router.get("/", homeController);

module.exports = router;
