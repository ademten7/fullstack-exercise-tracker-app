const express = require("express");
const router = express.Router();
const Exercise = require("../models/exercisesSchema");
const {
  getExercises,
  createExercise,
  updateExercisePut,
  updateExercisePatch,
  deleteExercise,
  getSingleExercise,
} = require("../controllers/exerciseControllers");

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
router.get("/", getExercises);

//Create new User
router.post("/add", createExercise);

//Request method PUT (replacing existing resource) and PATCH (updating existing resource)
//Update user
router.put("/update/:id", updateExercisePut);

//Patch
router.patch("/update/:id", updateExercisePatch);

//Delete request
//delete exercise
router.delete("/:id", deleteExercise);

//Read exercise
//endpoint /records/:id
router.get("/:id", getSingleExercise);

module.exports = router;
