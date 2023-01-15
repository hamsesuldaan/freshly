const express = require("express");

const {
  dashboardPageController,
} = require("../../controller/admin/dashboard");
const isUserAllowed = require("../../middlewares/isUserAllowed");

const router = express.Router();

router.get("/", isUserAllowed, dashboardPageController);

module.exports = router;
