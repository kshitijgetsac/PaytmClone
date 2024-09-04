const express = require("express");
const z = require("zod");
const user = require("../db");
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
  if (existingUser == NULL) {
    res.status(411).json({
      msg: "user with this email already exists please try with different username",
    });
    return;
  }
  await User.create({
    username: req.body.email,
    password: req.body.password,
    firstName: req.body.firstname,
    lastname: req.body.lastname,
  });
});
module.exports({
  userRouter,
});
