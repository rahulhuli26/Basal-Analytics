import { ERROR, GETUSER, LOADING, POSTUSER } from "./users.types";

const initialState = {
  isError: false,
  isLoading: false,
  data: [],
};

// Reducer function for handling user-related actions
export const usersReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case GETUSER: {
      // Update sessionStorage and localStorage based on the received payload
      if (payload) {
        sessionStorage.setItem("token", JSON.stringify(payload.token));
        localStorage.setItem("user", JSON.stringify(payload));
      } else {
        sessionStorage.removeItem("token", JSON.stringify(payload));
        localStorage.removeItem("user");
      }
      return {
        ...state,
        isLoading: false,
        isError: false,
        data: payload,
      };
    }
    case POSTUSER: {
      return {
        ...state,
        isLoading: false,
        isError: false,
        data: payload,
      };
    }
    case ERROR: {
      return {
        ...state,
        isError: true,
      };
    }
    case LOADING: {
      return {
        ...state,
        isLoading: true,
      };
    }
    default: {
      return state;
    }
  }
};
