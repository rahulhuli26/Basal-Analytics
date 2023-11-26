import { useState } from "react";
import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { postFeedbacks } from "../store/feedbacks/feedbacks.action";

function AddFeedback() {
  const [feedback, setFeedback] = useState("");
  const dispatch = useDispatch();
  const user = JSON.parse(localStorage.getItem("user"));
  const navigate = useNavigate();

  // sending feedback object to postFeedbacks action
  const handleSubmit = async (e) => {
    e.preventDefault();
    const feedbackObj = {
      userId: user._id,
      username: user.username,
      feedback: feedback,
    };
    let res = await dispatch(postFeedbacks(feedbackObj));
    if (res.feedback.feedback) {
      navigate("/feedback");
    } else {
      alert("Error in posting feedback");
    }
  };

  return (
    <>
      <div className="container">
        <Form onSubmit={handleSubmit}>
          <Form.Group as={Col} controlId="formGridFeedback">
            <Form.Control
              as="textarea"
              type="text"
              placeholder="Write your feedback"
              onChange={(e) => setFeedback(e.target.value)}
              required
            />
          </Form.Group>
          <Button className="submit-btn" variant="primary" type="submit">
            Post feedback
          </Button>
        </Form>
      </div>
    </>
  );
}

export default AddFeedback;
