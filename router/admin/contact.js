const express = require("express");

const {contactPageController,
  contactPostcontroller
} = require("../../controller/admin/contact");
const isUserAllowed = require("../../middlewares/isUserAllowed");

const router = express.Router();

router.get("/", isUserAllowed, contactPageController);
router.post("/", contactPostcontroller);

module.exports = router;
