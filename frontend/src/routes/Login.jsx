import { useState } from "react";
import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import { useDispatch } from "react-redux";
import { loginUser } from "../store/users/users.actions";
import { useNavigate } from "react-router-dom";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const userObj = {
      email: email,
      password: password,
    };
    let res = await dispatch(loginUser(userObj));
    if (res.user === "") {
      alert(res.message);
    } else {
      // Navigating to the feedback page if login is successful
      navigate("/feedback");
    }
  };

  return (
    <>
      {/* Login form */}
      <div className="container">
        <Form onSubmit={handleSubmit}>
          <Form.Group as={Col} controlId="formGridEmail">
            <Form.Control
              type="email"
              placeholder="Enter email"
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </Form.Group>
          <Form.Group as={Col} controlId="formGridPassword">
            <Form.Control
              type="password"
              placeholder="Password"
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </Form.Group>
          <Button className="submit-btn" variant="primary" type="submit">
            Submit
          </Button>
        </Form>
        {/* Link to the signup page */}
        <div className="account-div">
          <a className="account" href="/signup">
            Don't have account?
          </a>
        </div>
      </div>
    </>
  );
}

export default Login;
