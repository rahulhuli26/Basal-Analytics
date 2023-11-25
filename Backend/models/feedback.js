const mongoose = require("mongoose");

const FeedbackSchema = mongoose.Schema(
  {
    userId: { type: mongoose.Schema.Types.ObjectId, ref: "user" },
    username: String,
    feedback: String,
  },
  {
    timeStamp: true,
  }
);

const FeedbackModel = mongoose.model("feedback", FeedbackSchema);

module.exports = FeedbackModel;
