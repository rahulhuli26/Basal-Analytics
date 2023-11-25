const express = require("express");
const connection = require("./db");
require("dotenv").config();

const authRouter = require("./routes/auth.routes");
const feedbackRouter = require("./routes/feedback.routes");

const app = express();
app.use(express.json());
app.use("/auth", authRouter);
app.use("/feedback", feedbackRouter);

app.listen(8000, async () => {
  try {
    await connection;
    console.log("connected to db successfully");
  } catch {
    console.log("something went wrong while connecting to db");
  }
  console.log("server started on localhost:8000");
});
