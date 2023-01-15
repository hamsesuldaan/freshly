const express = require("express");
const {

  ListtOfFruitsController,
  addFruitPageController,
  addFruitscontroller,
  updateFruitFormController,
  updateFruitController,
  deleteFruitController
  
  




} = require("../../controller/admin/fruits");

const router = express.Router();
const isUserAllowed = require("../../middlewares/isUserAllowed");



router.get("/", isUserAllowed, ListtOfFruitsController);

router.get("/addFruit", isUserAllowed, addFruitPageController);

router.post('/', isUserAllowed, addFruitscontroller)

router.get("/updateForm/:id", isUserAllowed, updateFruitFormController);


router.delete("/:id",isUserAllowed, deleteFruitController);

router.put("/:id",isUserAllowed ,  updateFruitController); 

module.exports = router;
