const { userModel } = require("../models/user");
const validator = require("validator");
const bcrypt = require("bcrypt");
var getAllUser = async (req, res) => {
  var users = await userModel.find();
  res.status(200).json({ message: "all users", users });
};
const addNewUser = async (req, res) => {
  var user = req.body;
  const nameRegex = /^[A-Za-z\s'-]+$/;
  try {
    if (!validator.isEmail(user.email) || validator.isLength(user.name.trim(), { min: 2, max: 50 }) && nameRegex.test(user.name.trim())) {
      return res.status(400).json({ message: "Invalid email or name format" });
    }
    const hashedPassword = await bcrypt.hash(user.password, 10);
    const newUser = await userModel.create({ name: user.name, age: user.age, email: user.email, password: hashedPassword });
    res.status(201).json({ message: "new user created", newUser });
  } catch (err) {
    res.status(404).json({ message: err.message });
  }
};

const updateUser = async (req, res) => {
  const { id } = req.params;
  const user = req.body;
  try {
    if (!validator.isEmail(user.email) || validator.isLength(user.name.trim(), { min: 2, max: 50 }) && nameRegex.test(user.name.trim())) {
      return res.status(400).json({ message: "Invalid emai or name format" });
    }
    const hashPassword = await bcrypt.hash(user.password, 10);
    const updatedUser = await userModel.findByIdAndUpdate(id, { name: user.name, age: user.age, email: user.email, password: hashPassword }
      , { new: true });
    res.status(200).json({ message: "user updated", updatedUser });
  }
  catch (err) {
    res.status(404).json({ message: err.message });
  }
}
const deleteUser = async (req, res) => {
  const { id } = req.params;
  try {
    const deletedUser = await userModel.findByIdAndDelete(id);
    res.status(200).json({ message: "user deleted", deletedUser });
  } catch (err) {
    res.status(404).json({ message: err.message });
  }
}

const getUserById = async (req, res) => {
  const { id } = req.params;
  try {
    const user = await userModel.findById(id);
    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }
    res.status(200).json({ message: "User found", user });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
}

module.exports = { getAllUser, addNewUser, updateUser, getUserById, deleteUser };
