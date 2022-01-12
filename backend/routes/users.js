const express = require("express");
const router = express.Router();
const User = require("../models/usersSchema");

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
router.get("/", async (req, res, next) => {
  try {
    const users = await User.find(); //mongoose method
    res.send({ success: true, data: users });
  } catch (err) {
    next(err);
  }
});

//Create new User
router.post("/add", async (req, res, next) => {
  try {
    const user = new User(req.body);
    await user.save();
    res.json({ success: true, data: user });
  } catch (err) {
    next(err);
  }
});

//Request method PUT (replacing existing resource) and PATCH (updating existing resource)
//Update user
router.put("/update/:id", async (req, res, next) => {
  try {
    const user = await User.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    });
    res.send({ success: true, data: user });
  } catch (err) {
    next(err);
  }
});

//Patch
router.patch("/update/:id", async (req, res, next) => {
  try {
    const user = await User.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    });
    res.send({ success: true, data: user });
  } catch (err) {
    next(err);
  }
});

//Delete request
//delete user
router.delete("/:id", async (req, res, next) => {
  try {
    const user = await User.findByIdAndDelete(req.params.id);
    res.send({ success: true, data: user });
  } catch (err) {
    next(err);
  }
});

//Read user
//endpoint /users/:id
router.get("/:id", async (req, res, next) => {
  try {
    const user = await User.findOne({ _id: req.params.id });
    res.send({ success: true, data: user });
  } catch (err) {
    next(err);
  }
});

module.exports = router;
