import {
  DELETE_FEEDBACK,
  GET_FEEDBACK,
  POST_FEEDBACK,
  UPDATE_FEEDBACK,
} from "./feedbacks.type";

const initialState = {
  isError: false,
  isLoading: false,
  feedbacks: [],
};

export const feedbackReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case GET_FEEDBACK: {
      return {
        ...state,
        isLoading: false,
        isError: false,
        data: payload,
      };
    }
    case POST_FEEDBACK: {
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
    case UPDATE_FEEDBACK: {
      return {
        ...state,
        isLoading: false,
        isError: false,
        data: payload,
      };
    }
    case DELETE_FEEDBACK: {
      return {
        ...state,
        isLoading: false,
        isError: false,
        data: payload,
      };
    }
    default: {
      return state;
    }
  }
};
