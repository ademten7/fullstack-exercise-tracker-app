const { check, validationResult } = require("express-validator");
const UserCollection = require("../models/usersSchema");

let isValidateUser = [
  check("username", "please firstname shouldn't be less than 2 chars long")
    .isLength({ min: 2 }) //body("firstname").isLength({min:5})==> i want to control this condition

    .trim(), //trim is sanitisation.(do this)
  check("email", "please provide a valid email address")
    .isEmail()
    .trim()
    .escape() // will replace certain characters (i.e. <, >, /, &, ', ") with the corresponding HTML entity.
    .normalizeEmail() //ensures the email address is in a safe and standard format.
    .toLowerCase() //toLowerCase()==>sanitisation==> change the value
    .custom((value) => {
      //we can create custom sanitisation
      return UserCollection.findOne({ email: value }).then((user) => {
        //if there is same email send error
        if (user) {
          return Promise.reject("Email already exist"); //it is an error message
        }
        return true;
      });
    }),
  check("password")
    .isLength({ min: 8 })
    .withMessage("Password Must Be at Least 8 Characters")
    .matches("[0-9]")
    .withMessage("Password Must Contain a Number")
    .matches("[A-Z]")
    .withMessage("Password Must Contain an Uppercase Letter")
    .trim()
    .escape(), //escape() will replace certain characters (i.e. <, >, /, &, ', ") with the corresponding HTML entity.

  //custom validator
  (req, res, next) => {
    const errors = validationResult(req);
    if (errors.isEmpty()) {
      //if error is empty (if there is no error)
      next();
    } else {
      let message = errors.array().reduce((acc, item) => {
        acc[item.param] = item.msg; //inside the error there is some message
        return acc;
      }, {});

      next({ status: 401, message: message });
      /*
          "success": false,
        "message": {
            "firstName": "please firstname shouldn't be less than 5 chars long",
            "lastName": "please enter something as lastname",
            "email": "Email already exist",
            "password": "please dont use common words as password"
        }
    }
          */
    }
  },
];
module.exports = isValidateUser;
