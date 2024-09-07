const mongoose = require("mongoose");
const { mongoConnectionString } = require("./routes/config");
mongoose.connect(mongoConnectionString);
const userSchema = new mongoose.Schema({
  username: { type: String },
  password: { type: String },
  firstname: { type: String },
  lastname: { type: String },
});
const User = mongoose.model("User", userSchema);
const accountSchema = new mongoose.Schema({
  userid: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
    required: true,
  },
  balance: {
    type: Number,
    required: true,
  },
});
const Account = mongoose.model("Account", accountSchema);

module.exports = { User, Account };
