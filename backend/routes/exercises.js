const express = require("express");
const router = express.Router();
const Exercise = require("../models/exercisesSchema");

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
    const exercises = await Exercise.find();
    res.send({ success: true, data: exercises });
  } catch (err) {
    next(err);
  }
});

//Create new User
router.post("/add", async (req, res, next) => {
  try {
    const exercise = new Exercise(req.body);
    await exercise.save();
    res.json({ success: true, data: exercise });
  } catch (err) {
    next(err);
  }
});

//Request method PUT (replacing existing resource) and PATCH (updating existing resource)
//Update user
router.put("/update/:id", async (req, res, next) => {
  try {
    const exercise = await Exercise.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    });
    res.send({ success: true, data: exercise });
  } catch (err) {
    next(err);
  }
});

//Patch
router.patch("/update/:id", async (req, res, next) => {
  try {
    const exercise = await Exercise.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    });
    res.send({ success: true, data: exercise });
  } catch (err) {
    next(err);
  }
});

//Delete request
//delete exercise
router.delete("/:id", async (req, res, next) => {
  try {
    const exercise = await Exercise.findByIdAndDelete(req.params.id);
    res.send({ success: true, data: exercise });
  } catch (err) {
    next(err);
  }
});

//Read exercise
//endpoint /records/:id
router.get("/:id", async (req, res, next) => {
  try {
    const exercise = await Exercise.findOne({ _id: req.params.id });
    res.send({ success: true, data: exercise });
  } catch (err) {
    next(err);
  }
});

module.exports = router;
