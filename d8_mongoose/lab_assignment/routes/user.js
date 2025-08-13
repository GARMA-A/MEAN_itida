const express = require("express");
const { addNewUser, getAllUser, getUserById, deleteUser, updateUser } = require("../controllers/user");
const router = express.Router();
router.post("/", addNewUser);
router.get("/", getAllUser);

router.get("/:id", getUserById);
router.delete("/:id", deleteUser);
router.put("/:id", updateUser);
module.exports = router;
