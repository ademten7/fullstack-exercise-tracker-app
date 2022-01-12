const mongoose = require("mongoose");

//we will create a schema

//first we imported schema object
const { Schema } = mongoose;

//we need to follow schema, the keys should match same number

const userSchema = new Schema(
  {
    username: {
      type: String,
      required: true,
      unique: true,
      trim: true,
      minlength: 3,
    },
  },
  {
    timestamps: true,
  }
);

//this is a constructor thats why we use upper  case
//IT CREATES A "users" collection on  "" database
const User = mongoose.model("User", userSchema);
module.exports = User;
