const express = require("express");
const accountRouter = express.Router();
const mongoose = require("mongoose");
const z = require("zod");
const { Account } = require("../db");
const { authMiddleware } = require("../middleware");
accountRouter.get("/balance", authMiddleware, async (req, res) => {
  const userid = req.userid;
  //   const newBalance = 0;
  const AccountDetails = await Account.findOne({
    userid: userid,
  });
  if (!AccountDetails) {
    res.status(411).json({
      msg: "some error occurred",
    });
    return;
  }
  console.log(AccountDetails.balance);
  res.status(200).json({ balance: AccountDetails.balance });
});

module.exports = accountRouter;
