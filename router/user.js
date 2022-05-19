const express = require("express");
const User = require("../models/userSchema");
const router = express.Router();

router.get("/getUser", (req, res) => {
  User.findOne({ _id: "user1" })
    .then((user) => {
      if (user) {
        res.status(200).json(user);
      } else {
        res.status(404).json({ error: "User not found" });
      }
    })
    .catch((err) => res.status(500).json({ error: err }));
});

router.post("/setUser", async (req, res) => {
  const { _id, name, age, bio } = req.body;

  if (!_id || !name || !age) {
    return res.status(422).json({ error: "atleast one field is required" });
  } else {
    // const user = new User({ name, age, bio });
    User.findOne({ _id: _id }).then((docExists) => {
      if (docExists) {
        docExists.name = name;
        docExists.age = age;
        if (bio) docExists.bio = bio;

        docExists
          .save()
          .then(() => {
            return res.status(201).json({ success: "user set succesfully" });
          })
          .catch((err) => res.status(500).json({ error: err }));
      } else {
        const newDoc = new User({ _id, name, age, bio });
        newDoc.save();
      }
    });
  }
});

module.exports = router;
