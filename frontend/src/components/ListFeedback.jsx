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
  // opening modal
  const handleShow = (data) => {
    setViewdata(data);
    setShow(true);
  };
  const dispatch = useDispatch();
  const navigate = useNavigate();

  // sending data to update feedback route
  const handleEdit = (data) => {
    const feedbackData = JSON.stringify(data);
    navigate(`/updateFeedback/${feedbackData}`);
  };
  // sending data to delete perticular feedback
  const handleDelete = (id) => {
    dispatch(deleteFeedback(id));
    window.location.reload();
  };
  return (
    <>
      <div className="list-btn">
        {feedbacks &&
          feedbacks.map((data, index) => {
            let status;
            if (user.role === "admin" && data.userId === user._id) {
              status = false;
            } else if (data.userId === user._id || user.role === "admin") {
              status = false;
            } else {
              status = true;
            }

            return (
              <div className="listitems-btn" key={index}>
                <Card>
                  <Card.Header>{data.username}</Card.Header>
                  <Card.Body>
                    <Card.Text>{data.feedback}</Card.Text>
                  </Card.Body>
                  <Card.Footer className="card-btn">
                    {/* Veiw button */}
                    <Button
                      className="ft-btn"
                      variant="primary"
                      onClick={() => handleShow(data)}
                      disabled={status}
                    >
                      <MdOutlineRemoveRedEye />
                    </Button>
                    {/* Edit button */}
                    <Button
                      className="ft-btn"
                      variant="warning"
                      onClick={() => handleEdit(data)}
                      disabled={status}
                    >
                      <FaEdit />
                    </Button>
                    {/* Delete button */}
                    <Button
                      className="ft-btn"
                      variant="danger"
                      onClick={() => handleDelete(data._id)}
                      disabled={status}
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
