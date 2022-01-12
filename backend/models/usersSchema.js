const mongoose = require("mongoose");
const faker = require("faker");

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
      minlength: 2,
    },
    email: { type: String, required: true },
    password: { type: String, required: true },
  },
  {
    timestamps: true,
  }
);

//this is a constructor thats why we use upper  case
//IT CREATES A "users" collection on  "" database
const UserCollection = mongoose.model("User", userSchema);
// for (let i = 0; i < 30; i++) {
//   const record = new UserCollection({
//     username: faker.name.findName(),
//     email: faker.internet.email(),
//     password: faker.internet.password,
//   });
//   record.save();
// }

module.exports = UserCollection;
