import { Routes, Route } from "react-router-dom";
import Login from "./Login";
import Signup from "./Signup";
import Feedback from "./Feedback";
import Home from "./Home";

export const AllRoutes = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/feedback" element={<Feedback />} />
      </Routes>
    </>
  );
};
