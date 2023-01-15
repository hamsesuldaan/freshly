const express = require("express");
const {
  ListtOfUsersController,
  addUserPageController,
  addUsercontroller,
  deleteUserController,
  updateUserController,
  updateUserFormController
  
} = require("../../controller/admin/users");

const router = express.Router();

const isUserAllowed = require("../../middlewares/isUserAllowed");


router.get("/", isUserAllowed, ListtOfUsersController);

router.get("/addUser", isUserAllowed, addUserPageController);

router.get("/updateForm/:id", isUserAllowed, updateUserFormController);

router.post("/", isUserAllowed, addUsercontroller);

router.delete("/:id",isUserAllowed, deleteUserController);

router.put("/:id",isUserAllowed ,updateUserController);

module.exports = router;
