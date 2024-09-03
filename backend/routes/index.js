const express = require("express");
const userRouter = require("./userRouter");
const accountRouter = require("./accountRouter");
const router = express.router();
router.use("/user", userRouter);
router.use("/account", accountRouter);
module.exports({ router });
