const mongoose = require("mongoose");

mongoose
  .connect("mongodb://localhost:27017/Student-Api")
  .then(() => console.log("Conection Successfull..."))
  .catch((err) => console.log(err));
