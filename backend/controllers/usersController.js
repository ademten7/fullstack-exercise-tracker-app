const UserCollection = require("../models/usersSchema");
const getUsers = async (req, res, next) => {
  try {
    const users = await UserCollection.find(); //mongoose method
    res.send({ success: true, data: users });
  } catch (err) {
    next(err);
  }
};

const createUsers = async (req, res, next) => {
  try {
    const user = new UserCollection(req.body);
    await user.save();
    res.json({ success: true, data: user });
  } catch (err) {
    next(err);
  }
};

const updateOrderPut = async (req, res, next) => {
  try {
    const user = await UserCollection.findByIdAndUpdate(
      req.params.id,
      req.body,
      {
        new: true,
      }
    );
    res.send({ success: true, data: user });
  } catch (err) {
    next(err);
  }
};
const updateUsersPatch = async (req, res, next) => {
  try {
    const user = await UserCollection.findByIdAndUpdate(
      req.params.id,
      req.body,
      {
        new: true,
      }
    );
    res.send({ success: true, data: user });
  } catch (err) {
    next(err);
  }
};

const deleteUsers = async (req, res, next) => {
  try {
    const user = await UserCollection.findByIdAndDelete(req.params.id);
    res.send({ success: true, data: user });
  } catch (err) {
    next(err);
  }
};

const getSingleUser = async (req, res, next) => {
  try {
    const user = await UserCollection.findOne({ _id: req.params.id });
    res.send({ success: true, data: user });
  } catch (err) {
    next(err);
  }
};
module.exports = {
  getUsers,
  createUsers,
  updateOrderPut,
  updateUsersPatch,
  deleteUsers,
  getSingleUser,
};
