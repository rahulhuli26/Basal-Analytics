const mongoose = require("mongoose");

// MongoDB schema for feedback
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

// MongoDB model for feedback
const FeedbackModel = mongoose.model("feedback", FeedbackSchema);

module.exports = FeedbackModel;
