const express = require("express");
const cors = require("cors");

const { r: mainrouter } = require("./routes/index");
const app = express();
app.use(cors());
app.use(express.json());
app.use("/api/v1", mainrouter);
app.listen(3000);
