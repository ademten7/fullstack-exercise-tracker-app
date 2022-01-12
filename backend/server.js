const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
require("dotenv").config();

//how to create express server
const app = express();
const port = process.env.PORT;

//middleware
app.use(cors()); //cors middleware
app.use(express.json()); //allow us to pass json. because our server sending and receiving JSON

//create mongoose connection
mongoose.connect("mongodb://127.0.0.1:27017/fullstack-exercise-tracker", () => {
  console.log("connection established...... with mongo");
});

const exercisesRouter = require("./routes/exercises");
const usersRouter = require("./routes/users");

app.use("/exercises", exercisesRouter);
app.use("/users", usersRouter);

//************************************ */ handling 404 page not found
//if you enter wrong url show this page
//put this always before the app.listen
//if compiler reach this line execute this code
app.use((req, res, next) => {
  res.sendFile(__dirname + "/views/notfound.html");
});

app.use((err, req, res, next) => {
  //if there is an erro show this status and message
  //this message and status are coming from userRouter.js
  //we created error and error object has message and status
  //if we dont create any status throw 500 as status
  res.status(err.status || 500).send({ success: false, message: err.message });
  //always send message json format ===>res.send({ success: false, message: err.message });
  /*
      {
        "success": false,
        "message": "no such user available"
        }
      */
});
//it starts the server
//it listening on certain port.
app.listen(port, () => console.log(`server is running on :${port}`));
