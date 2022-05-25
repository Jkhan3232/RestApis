const mongoose = require("mongoose");
const validator = require("validator");

const studentSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    // uppercase: true,
    minlength: 3,
    trim: true,
  },

  email: {
    type: String,
    unique: true,
    required: true,
    validate(value) {
      if (!validator.isEmail(value)) {
        throw new Error("put the velid email id");
      }
    },
  },
  phone: {
    type: Number,
    required: true,
    min: 10,
  },
  address: {
    type: String,
    require: true,
    unique: true,
  },
});

// Model Creatation

const Student = new mongoose.model("Student", studentSchema);
module.exports = Student;
// Creatdocument

// const CreatDocument = async () => {
//   try {
//     // const nehaNaz = new Classlist({
//     //   name: "Neha Naz",
//     //   type: "Student",
//     //   class: "BCA",
//     //   age: 20,
//     //   avtive: true,
//     //   author: "Jeeshan Khan",
//     // });
