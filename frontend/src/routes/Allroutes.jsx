import { Routes, Route } from "react-router-dom";
import Login from "./Login";
import Signup from "./Signup";
import Feedback from "./Feedback";
import Home from "./Home";
import AddFeedback from "../components/AddFeedback";
import UpdateFeedback from "../components/UpdateFeedback";

export const AllRoutes = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/feedback" element={<Feedback />} />
        <Route path="/addFeedback" element={<AddFeedback />} />
        <Route
          path="/updateFeedback/:feedbackData"
          element={<UpdateFeedback />}
        />
      </Routes>
    </>
  );
};
