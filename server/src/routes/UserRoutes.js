const express = require("express");
const router = express.Router();
const UserController = require("../controllers/UserController");

router.post("/", UserController.createUser); // POST API
router.get("/", UserController.getAllUsers); // GET API
router.get("/:id", UserController.getUserById); // GET API
router.put("/:id", UserController.updateUser); // PUT API
router.delete("/:id", UserController.deleteUser);

module.exports = router;
