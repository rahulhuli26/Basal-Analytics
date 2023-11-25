import axios from "axios";
import { ERROR, GETUSER, LOADING, POSTUSER } from "./users.types";

export const signupUser = (data) => async (dispatch) => {
  dispatch({ type: LOADING });
  try {
    const res = await axios.post("http://localhost:8000/auth/signup", data);
    if (res.data.user === "") {
      dispatch({ type: POSTUSER, payload: "" });
    } else {
      dispatch({ type: POSTUSER, payload: res.data });
    }
    return res.data;
  } catch (err) {
    console.log(err);
    dispatch({ type: ERROR });
  }
};

export const loginUser = (data) => async (dispatch) => {
  dispatch({ type: LOADING });
  try {
    const res = await axios.post("http://localhost:8000/auth/login", data);
    if (res.data.user === "") {
      dispatch({ type: GETUSER, payload: "" });
    } else {
      dispatch({ type: GETUSER, payload: res.data });
    }
    return res.data;
  } catch (err) {
    console.log(err);
    dispatch({ type: ERROR });
  }
};
