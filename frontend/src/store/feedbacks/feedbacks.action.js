import axios from "axios";
import {
  DELETE_FEEDBACK,
  ERROR,
  GET_FEEDBACK,
  LOADING,
  POST_FEEDBACK,
  UPDATE_FEEDBACK,
} from "./feedbacks.type";

export const getFeedbacks = () => async (dispatch) => {
  dispatch({ type: LOADING });
  try {
    const res = await axios.get("http://localhost:8000/feedback/get");
    dispatch({ type: GET_FEEDBACK, payload: res.data.feedbacks });
    return res.data;
  } catch (err) {
    console.log(err);
    dispatch({ type: ERROR });
  }
};

export const postFeedbacks = (data) => async (dispatch) => {
  dispatch({ type: LOADING });
  try {
    const res = await axios.post("http://localhost:8000/feedback/add", data);
    if (res.data === "") {
      dispatch({ type: POST_FEEDBACK });
    } else {
      dispatch({ type: POST_FEEDBACK });
    }
    return res.data;
  } catch (err) {
    console.log(err);
    dispatch({ type: ERROR });
  }
};

export const updateFeedback = (data) => async (dispatch) => {
  dispatch({ type: LOADING });
  try {
    const res = await axios.patch(
      `http://localhost:8000/feedback/update/${data._id}`,
      { feedback: data.feedback }
    );
    dispatch({ type: UPDATE_FEEDBACK });
    return res.data;
  } catch (err) {
    console.log(err);
    dispatch({ type: ERROR });
  }
};

export const deleteFeedback = (id) => async (dispatch) => {
  dispatch({ type: LOADING });
  try {
    await axios.delete(`http://localhost:8000/feedback/delete/${id}`);
    dispatch({ type: DELETE_FEEDBACK });
  } catch (err) {
    console.log(err);
    dispatch({ type: ERROR });
  }
};
