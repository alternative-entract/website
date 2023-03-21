const express = require("express");
const router = express.Router();
const {authenticateUser,authorizePermissions}  = require("../middleware/authentication");

const {
  getAllUsers,
  getSingleUser,
  showCurrentUser,
  updateUser,
  updateUserPassword,
} = require("../controllers/userController");

router.route("/").get(authenticateUser, authorizePermissions("admin"),getAllUsers);
router.route("/profile").get(authenticateUser,showCurrentUser);
router.route("/updateUser").patch(authenticateUser,updateUser);
router.route("/updateUserPassword").post(authenticateUser,updateUserPassword);
router.route("/:id").get(getSingleUser);



module.exports = router;
