const express = require("express");
const z = require("zod");
const mongoose = require("mongoose");
const User = require("../db.js");

const JWT_SECRET = require("./config");
const jwt = require("jsonwebtoken");
const signupBody = z.object({
  username: z.string().email(),
  firstName: z.string(),
  lastName: z.string(),
  password: z.string(),
});
const userRouter = express.Router();
userRouter.post("/signup", async (req, res) => {
  const isSuccessful = signupBody.safeParse(req.body);
  if (!isSuccessful) {
    res.status(411).json({
      msg: "there was some error parsing your response",
    });
    return;
  }
  const existingUser = await User.findOne({
    username: req.body.username,
  });
  if (existingUser != null) {
    res.status(411).json({
      msg: "user with this email already exists please try with different username",
    });
    return;
  }
  const dbUser = await User.create({
    username: req.body.username,
    password: req.body.password,
    firstname: req.body.firstname,
    lastname: req.body.lastname,
  });
  const token = jwt.sign(
    {
      userid: dbUser._id,
    },
    JWT_SECRET
  );
  res.status(200).json({
    msg: "user created successfully",
    token: token,
  });
});
module.exports = userRouter;
