const express = require("express");
const z = require("zod");
const mongoose = require("mongoose");
const { User, Account } = require("../db.js");

const { JWT_SECRET } = require("./config");
const jwt = require("jsonwebtoken");
const { authMiddleware } = require("../middleware");
const signupBody = z.object({
  username: z.string().email(),
  firstname: z.string(),
  lastname: z.string(),
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
  const amountToAllocate = Math.floor(Math.random() * 10000000);
  const AccountUser = await Account.create({
    userid: dbUser._id,
    balance: amountToAllocate,
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
const signInbody = z.object({
  username: z.string().email(),
  password: z.string(),
});
userRouter.post("/signin", async (req, res) => {
  const success = signInbody.safeParse(req.body);
  if (!success) {
    res.status(411).json({
      msg: "invalid inputs",
    });
    return;
  }
  const username = req.body.username;
  const password = req.body.password;
  const findUser = await User.findOne({
    username: username,
    password: password,
  });

  if (!findUser || findUser === null) {
    res.status(411).json({
      msg: "wrong email or password",
    });
    return;
  }
  const token = jwt.sign(
    {
      userid: findUser._id,
    },
    JWT_SECRET
  );
  res.status(200).json({
    token: token,
    msg: "login successful",
  });
});
const updateBody = z.object({
  firstname: z.string(),
  lastname: z.string(),
  password: z.string(),
});
userRouter.put("/update", authMiddleware, async (req, res) => {
  const success = updateBody.safeParse(req.body);
  if (!success) {
    return res.status(411).json({
      msg: "Error while updating information",
    });
  }
  const userid = req.userid;
  const userDetails = User.findOne({
    _id: userid,
  });
  if (userDetails == null) {
    return res.status(412).json({
      msg: "you do not exist in our database make an account first",
    });
  } else {
    const updated = await User.updateOne(
      {
        _id: userid,
      },
      {
        firstname: req.body.firstname,
        lastname: req.body.lastname,
        password: req.body.password,
      }
    );
    return res.status(200).json({
      msg: "details successfully updated",
    });
  }
});
const getNamesObject = z.object({
  firstname: z.string(),
});
userRouter.get("/bulk", async (req, res) => {
  const filter = req.query.firstname || "";
  const success = getNamesObject.safeParse(req.query);
  if (!success) {
    return res.status(415).json({
      msg: "invalid inputs",
    });
  }
  const usersArray = await User.find({
    $or: [
      {
        firstname: {
          $regex: filter,
        },
      },
      {
        lastname: {
          $regex: filter,
        },
      },
    ],
  });
  if (!usersArray) {
    res.status(200).json({
      msg: [],
    });
  }
  res.status(200).json(
    usersArray.map(function (user) {
      return {
        firstname: user.firstname,
        lastname: user.lastname,
        id: user._id,
      };
    })
  );
});

module.exports = userRouter;
