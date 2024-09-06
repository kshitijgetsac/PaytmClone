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

module.exports = User;
