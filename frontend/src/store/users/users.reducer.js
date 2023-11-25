import { ERROR, GETUSER, LOADING, POSTUSER } from "./users.types";

const initialState = {
  isError: false,
  isLoading: false,
  data: [],
};

export const usersReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case GETUSER: {
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
