const express = require("express");
const router = express.Router();
const User = require("../models/user");
router.get("/", (req, res) => {
  res.send("hello");
});

router.get("/add/:username/:email/:cin", (req, res) => {
  try {
    new User({
      username: req.params.username,
      email: req.params.email,
      cin: req.params.cin,
    }).save();
    res.status(200).send("good added");
  } catch (err) {
    console.log(err);
  }
});

router.post("/add", (req, res) => {
  try {
    console.log(req.body);
    const user = new User(req.body);
    user.save();
    res.status(200).json(user);
  } catch (err) {
    console.log(err);
  }
});

router.get("/showusers", async (req, res) => {
  try {
    const user = await User.find();

    res.status(200).json(user);
  } catch (err) {
    console.log(err);
  }
});

router.get("/showusers/:id", async (req, res) => {
  try {
    const user = await User.findById(req.params.id);

    res.status(200).json(user);
  } catch (err) {
    console.log(err);
  }
});

router.get("/showbyname/:username", async (req, res) => {
  try {
    const { name } = req.params.username;
    console.log(name);
    const user = await User.find(name);

    res.status(200).json(user);
  } catch (err) {
    console.log(err);
  }
});

router.delete("/delete/:id", async (req, res) => {
  try {
    const user = await User.findByIdAndDelete(req.params.id);

    res.status(200).json(user);
  } catch (err) {
    console.log(err);
  }
});

router.put("/update/:id", async (req, res) => {
  try {
    const user = await User.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    });

    res.status(200).json(user);
  } catch (err) {
    console.log(err);
  }
});

module.exports = router;
