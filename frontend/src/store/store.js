import {
  applyMiddleware,
  combineReducers,
  compose,
  legacy_createStore,
} from "redux";
import thunk from "redux-thunk";
import { usersReducer } from "./users/users.reducer";
import { feedbackReducer } from "./feedbacks/feedbacks.reducer";

const rootReducer = combineReducers({
  users: usersReducer,
  feedback: feedbackReducer,
});

export const store = legacy_createStore(
  rootReducer,
  compose(
    applyMiddleware(thunk),
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  )
);
