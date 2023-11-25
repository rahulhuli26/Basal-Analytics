import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import { MdOutlineRemoveRedEye } from "react-icons/md";
import { FaEdit } from "react-icons/fa";
import { MdDeleteOutline } from "react-icons/md";
import Modal from "react-bootstrap/Modal";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { deleteFeedback } from "../store/feedbacks/feedbacks.action";
import { useNavigate } from "react-router-dom";

export default function ListFeedback({ feedbacks, user }) {
  const [show, setShow] = useState(false);
  const [viewData, setViewdata] = useState("");
  const handleClose = () => setShow(false);
  const handleShow = (data) => {
    setViewdata(data);
    setShow(true);
  };
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleEdit = (feedbackData) => {
    navigate(`/updateFeedback/${feedbackData}`);
  };

  const handleDelete = (id) => {
    dispatch(deleteFeedback(id));
    window.location.reload();
  };
  console.log(user, feedbacks);
  return (
    <>
      <div>
        {feedbacks &&
          feedbacks.map((data, index) => {
            return (
              <div key={index}>
                <Card>
                  <Card.Header>{data.username}</Card.Header>
                  <Card.Body>
                    <Card.Text>{data.feedback}</Card.Text>
                  </Card.Body>
                  <Card.Footer>
                    <Button
                      className="ft-btn"
                      variant="primary"
                      onClick={() => handleShow(data)}
                      disabled={
                        data.role === "admin" ||
                        Number(data.userId) === Number(user._id)
                      }
                    >
                      <MdOutlineRemoveRedEye />
                    </Button>
                    <Button
                      className="ft-btn"
                      variant="warning"
                      onClick={() => handleEdit(data)}
                      disabled={
                        data.role === "admin" ||
                        Number(data.userId) === Number(user._id)
                      }
                    >
                      <FaEdit />
                    </Button>
                    <Button
                      className="ft-btn"
                      variant="danger"
                      onClick={() => handleDelete(data._id)}
                      disabled={
                        data.role === "admin" ||
                        Number(data.userId) === Number(user._id)
                      }
                    >
                      <MdDeleteOutline />
                    </Button>
                  </Card.Footer>
                </Card>
              </div>
            );
          })}
      </div>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>{viewData.username} Feedback</Modal.Title>
        </Modal.Header>
        <Modal.Body>{viewData.feedback}</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}
