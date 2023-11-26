import { useState } from "react";
import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import { useDispatch } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { updateFeedback } from "../store/feedbacks/feedbacks.action";

function UpdateFeedback() {
  const { feedbackData } = useParams();
  const updateData = JSON.parse(feedbackData);
  const [feedback, setFeedback] = useState("");
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const feedbackObj = {
      _id: updateData._id,
      feedback: feedback,
    };
    let res = await dispatch(updateFeedback(feedbackObj));
    if (res) {
      navigate("/feedback");
    } else {
      alert("Error in updating feedback");
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
              defaultValue={updateData.feedback}
              onChange={(e) => setFeedback(e.target.value)}
            />
          </Form.Group>
          <Button className="submit-btn" variant="primary" type="submit">
            Update feedback
          </Button>
        </Form>
      </div>
    </>
  );
}

export default UpdateFeedback;
