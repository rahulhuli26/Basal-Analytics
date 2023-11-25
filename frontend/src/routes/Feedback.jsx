import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";


const Feedback = () => {
  const { data } = useSelector((state) => state.users);
  conat { } = useSelector((state) => state.);
  const token = JSON.parse(sessionStorage.getItem("token"));
  const user = JSON.parse(localStorage.getItem("user"));

  return (
    <>
      <div>kjhlkj</div>
    </>
  );
};

export default Feedback;
