import { useState } from "react";
import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import { useDispatch } from "react-redux";
import { signupUser } from "../store/users/users.actions";
import { useNavigate } from "react-router-dom";

function Signup() {
  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [role, setRole] = useState("");
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const userObj = {
      username: username,
      email: email,
      role: role,
      password: password,
    };
    let res = await dispatch(signupUser(userObj));
    if (res.user === "") {
      alert(res.message);
    } else {
      // Navigating to the login page if signup is successful
      navigate("/login");
    }
  };

  return (
    <>
      {/* Signup form */}
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
          <Form.Group as={Col} controlId="formGridUsername">
            <Form.Control
              type="text"
              placeholder="Username"
              onChange={(e) => setUsername(e.target.value)}
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
          <Form.Group
            as={Col}
            controlId="formGridRole"
            onChange={(e) => setRole(e.target.value)}
            required
          >
            <Form.Select defaultValue="Choose...">
              <option value="">Select role</option>
              <option value="user">User</option>
              <option value="admin">Admin</option>
            </Form.Select>
          </Form.Group>
          <Button className="submit-btn" variant="primary" type="submit">
            Submit
          </Button>
        </Form>
        {/* Link to the login page */}
        <div className="account-div">
          <a className="account" href="/login">
            Already have account?
          </a>
        </div>
      </div>
    </>
  );
}

export default Signup;
