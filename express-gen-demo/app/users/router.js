var express = require("express");
var router = express.Router();
const { index, getUserById, addingNewUser, updatingUserInfo, deletingUser} = require("./controller");

/* GET home page. */
router.get("/users", index);
router.get("/users/:id", getUserById);
router.post("/users", addingNewUser);
router.put("/users/:id", updatingUserInfo);
router.delete("/users/:id", deletingUser);

module.exports = router;
