const ExerciseCollection = require("../models/exercisesSchema");

const getExercises = async (req, res, next) => {
  try {
    const exercises = await ExerciseCollection.find();
    res.send({ success: true, data: exercises });
  } catch (err) {
    next(err);
  }
};

const createExercise = async (req, res, next) => {
  try {
    const exercise = new ExerciseCollection(req.body);
    await exercise.save();
    res.json({ success: true, data: exercise });
  } catch (err) {
    next(err);
  }
};

const updateExercisePut = async (req, res, next) => {
  try {
    const exercise = await ExerciseCollection.findByIdAndUpdate(
      req.params.id,
      req.body,
      {
        new: true,
      }
    );
    res.send({ success: true, data: exercise });
  } catch (err) {
    next(err);
  }
};

const updateExercisePatch = async (req, res, next) => {
  try {
    const exercise = await ExerciseCollection.findByIdAndUpdate(
      req.params.id,
      req.body,
      {
        new: true,
      }
    );
    res.send({ success: true, data: exercise });
  } catch (err) {
    next(err);
  }
};
const deleteExercise = async (req, res, next) => {
  try {
    const exercise = await ExerciseCollection.findByIdAndDelete(req.params.id);
    res.send({ success: true, data: exercise });
  } catch (err) {
    next(err);
  }
};

const getSingleExercise = async (req, res, next) => {
  try {
    const exercise = await ExerciseCollection.findOne({ _id: req.params.id });
    res.send({ success: true, data: exercise });
  } catch (err) {
    next(err);
  }
};
module.exports = {
  getExercises,
  createExercise,
  updateExercisePut,
  updateExercisePatch,
  deleteExercise,
  getSingleExercise,
};
