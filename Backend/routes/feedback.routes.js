const { Router } = require("express");
const FeedbackModel = require("../models/feedback");
const feedbackRouter = Router();

feedbackRouter.post("/add", async (req, res) => {
  try {
    const feedback = await FeedbackModel.create(req.body);
    res.status(200).send({ feedback });
  } catch (err) {
    res.status(500).send(err);
  }
});

feedbackRouter.get("/get", async (req, res) => {
  try {
    const feedbacks = await FeedbackModel.find();
    res.status(200).send({ feedbacks });
  } catch (err) {
    res.status(500).send(err);
  }
});

feedbackRouter.patch("/update/:id", async (req, res) => {
  const { id } = req.params;
  try {
    const getFeedback = await FeedbackModel.findById(id);
    if (!getFeedback) {
      return res.status(404).json({ error: "Feedback not found" });
    }
    if (req.body.feedback) {
      getFeedback.feedback = req.body.feedback;
    }

    const updatedFeedback = await getFeedback.save();
    res.status(200).json(updatedFeedback);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

feedbackRouter.delete("/delete/:id", async (req, res) => {
  const { id } = req.params;
  try {
    const deleteFeedback = await FeedbackModel.findByIdAndDelete(id);
    if (!deleteFeedback) {
      return res.status(404).json({ error: "Feedback not found" });
    }
    res.json({ message: "Feedback deleted successfully" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

module.exports = feedbackRouter;
