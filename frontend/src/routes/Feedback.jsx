import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Button from "react-bootstrap/Button";
import ListFeedback from "../components/ListFeedback";
import { getFeedbacks } from "../store/feedbacks/feedbacks.action";

const Feedback = () => {
  const user = JSON.parse(localStorage.getItem("user"));
  // dispatching actions and accessing feedback data from the store
  const dispatch = useDispatch();
  const { data } = useSelector((state) => state.feedback);

  useEffect(() => {
    dispatch(getFeedbacks());
  }, [dispatch]);

  return (
    <>
      <div>
        <div>
          {/* Button to navigate to the addFeedback page */}
          {user.role === "admin" ? (
            ""
          ) : (
            <Button
              className="post-btn"
              size="md"
              href="/addFeedback"
              variant="primary"
            >
              Post Feedback
            </Button>
          )}
        </div>
        <ListFeedback feedbacks={data} user={user} />
      </div>
    </>
  );
};

export default Feedback;
