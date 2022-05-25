const express = require("express");
const router = new express();
const Student = require("../model/schema");

router.post("/student", async (req, res) => {
  try {
    const user = new Student(req.body);
    const creatUsr = await user.save();
    res.status(201).send(creatUsr);
  } catch (err) {
    res.status(400).send(err);
  }
});

// find data

router.get("/student", async (req, res) => {
  try {
    // const user = new Student(req.body);
    const creatUser = await Student.find();
    res.send(creatUser);
  } catch (err) {
    res.status(400).send(err);
  }
});

router.get("/student/:id", async (req, res) => {
  try {
    const _id = req.params.id;
    const studentss = await Student.findById(_id);
    res.status(200).send(studentss);
  } catch (err) {
    res.status(400).send(err);
  }
});

router.get("/student/name/:name", async (req, res) => {
  try {
    const _name = req.params.name;
    const getName = await Student.find({ name: _name });
    res.status(200).send(getName);
  } catch (err) {
    res.status(400).send(err);
  }
});

//Update Data by id

router.patch("/student/:id", async (req, res) => {
  try {
    const _id = req.params.id;
    const studentUpdateByID = await Student.findByIdAndUpdate(_id, req.body, {
      new: true,
    });
    res.status(200).send(studentUpdateByID);
  } catch (err) {
    res.status(400).send(err);
  }
});

// Update by Name

router.patch("/student/name/:name", async (req, res) => {
  try {
    const _name = req.params.name;
    const studentUpdate = await Student.findOneAndUpdate(
      { name: _name },
      req.body,
      {
        new: true,
      }
    );
    res.status(200).send(studentUpdate);
  } catch (err) {
    res.status(400).send(err);
  }
});

// DATA delete

router.delete("/student/:id", async (req, res) => {
  try {
    const studentDelet = await Student.findByIdAndDelete(req.params.id);
    res.status(200).send(studentDelet);
  } catch (err) {
    res.status(400).send(err);
  }
});

module.exports = router;
