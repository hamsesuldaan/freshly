const express = require("express");
const {
  fruitsController,
  addFruitFormController,
  addFruitController,
  deleteFruitController,
  updateFruitFormController,
  updateFruitController,
} = require("../../controller/web/fruits");

const router = express.Router();

router.get("/", fruitsController);

router.get("/addFruits", addFruitFormController);
router.post("/", addFruitController);

router.get("/updateForm/:id", updateFruitFormController);

router.delete("/:id", deleteFruitController);

router.put("/:id", updateFruitController);

module.exports = router;
