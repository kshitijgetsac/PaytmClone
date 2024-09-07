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
const TransferBody = z.object({
  ToUserId: z.string(),
  balance: z.number().int(),
});
accountRouter.post("/transfer", authMiddleware, async (req, res) => {
  const success = TransferBody.safeParse(req.body);
  if (!success) {
    res.status(411).json({
      msg: "invalid inputs",
    });
    return;
  }
  const transferrerDetails = await Account.findOne({
    userid: req.userid,
  });
  if (transferrerDetails.balance < req.body.balance) {
    res.status(415).json({
      msg: "insufficient balance",
    });
    return;
  }

  //do the rest of work using transactions
  //to maintain ACID properties
  const session = await mongoose.startSession();
  session.startTransaction();
  try {
    const transferee = await Account.findOneAndUpdate(
      {
        userid: req.body.touserid,
      },
      { $inc: { balance: req.body.balance } }
    );
    const Transferrer = await Account.findOneAndUpdate(
      {
        userid: req.userid,
      },
      { $inc: { balance: -1 * req.body.balance } }
    );
    await session.commitTransaction();
    session.endSession();
    res.status(200).json({
      msg: "money sent successfully",
    });
  } catch (error) {
    await session.abortTransaction();
    session.endSession();
    res.status(415).json({
      msg: "something went wrong",
    });
  }
});

module.exports = accountRouter;
