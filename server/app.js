const express = require("express");
const cors = require("cors");
const app = express();
const reviewRoute=require("./routes/review.route")
const userRoute=require("./routes/user.route")
const noteRoute=require("./routes/note.route")
app.use(express.json());
app.use(cors());

app.get("/", (req, res) => {
  res.send("Interactive Note App server is alive!");
});

app.use("/review",reviewRoute)
app.use("/client",userRoute)
app.use("/note",noteRoute)

module.exports = app;
