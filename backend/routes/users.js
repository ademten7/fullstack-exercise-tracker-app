const express = require("express");
const router = express.Router();
const User = require("../models/usersSchema");
const {
  getUsers,
  createUsers,
  updateOrderPut,
  updateUsersPatch,
  deleteUsers,
  getSingleUser,
} = require("../controllers/usersController");
const isValidateUser = require("../middlewares/validationRules");

//change also app js

/* const data = fs.readFileSync(path.resolve(__dirname, "../models/db.json"),"utf-8")

console.log(JSON.parse(data))
const users = JSON.parse(data).users; */

// CRUD operation
//Create
//Read
//Update
//Delete

//Read Users
//endpoint /users
router.get("/", getUsers);

//Register
//Create new User
router.post("/add", isValidateUser, createUsers);

//Request method PUT (replacing existing resource) and PATCH (updating existing resource)
//Update user
router.put("/update/:id", updateOrderPut);

//Patch
router.patch("/update/:id", updateUsersPatch);

//Delete request
//delete user
router.delete("/:id", deleteUsers);

//Read user
//endpoint /users/:id
router.get("/:id", getSingleUser);

module.exports = router;
