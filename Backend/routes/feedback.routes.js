const { Router } = require("express");
const FeedbackModel = require("../models/feedback");
const feedbackRouter = Router();

// CRUD operations for customer feedback
// Create feedback
feedbackRouter.post("/add", async (req, res) => {
  try {
    // Creating a new feedback document
    const feedback = await FeedbackModel.create(req.body);
    res.status(200).send({ feedback });
  } catch (err) {
    res.status(500).send(err);
  }
});

// Read all feedback
feedbackRouter.get("/get", async (req, res) => {
  try {
    // Retrieving all feedback documents from the MongoDB collection
    const feedbacks = await FeedbackModel.find();
    // Responding with the retrieved feedback
    res.status(200).send({ feedbacks });
  } catch (err) {
    // Handling internal server error
    res.status(500).send(err);
  }
});

// Update feedback
feedbackRouter.patch("/update/:id", async (req, res) => {
  const { id } = req.params;
  try {
    // Updating the feedback document in the MongoDB collection
    const getFeedback = await FeedbackModel.findById(id);
    if (!getFeedback) {
      return res.status(404).json({ error: "Feedback not found" });
    }
    if (req.body.feedback) {
      getFeedback.feedback = req.body.feedback;
    }

    const updatedFeedback = await getFeedback.save();
    // Responding with the updated feedback
    res.status(200).json(updatedFeedback);
  } catch (error) {
    console.error(error);
    // Handling internal server error
    res.status(500).json({ error: "Internal Server Error" });
  }
});

// Delete feedback
feedbackRouter.delete("/delete/:id", async (req, res) => {
  const { id } = req.params;
  try {
    // Deleting the feedback document from the MongoDB collection
    const deleteFeedback = await FeedbackModel.findByIdAndDelete(id);
    if (!deleteFeedback) {
      return res.status(404).json({ error: "Feedback not found" });
    }
    // Responding with a success status
    res.json({ message: "Feedback deleted successfully" });
  } catch (error) {
    console.error(error);
    // Handling internal server error
    res.status(500).json({ error: "Internal Server Error" });
  }
});

module.exports = feedbackRouter;
