import axios from "axios";
import { ERROR, GETUSER, LOADING, POSTUSER } from "./users.types";

// Action creator for signing up a user
export const signupUser = (data) => async (dispatch) => {
  dispatch({ type: LOADING });
  try {
    // Send a POST request to the signup endpoint with the provided user data
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

// Action creator for logging in a user
export const loginUser = (data) => async (dispatch) => {
  dispatch({ type: LOADING });
  try {
    // Send a POST request to the login endpoint with the provided user data
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
