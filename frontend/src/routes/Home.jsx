import React from "react";
import Button from "react-bootstrap/Button";

function Home() {
  return (
    <div className="home-container">
      <h2>Welcome to Basal Analytics</h2>
      <h3>Feedback App</h3>
      <div>
        <Button className="loginBtn" variant="primary" href="/login">
          Signin
        </Button>
        <Button className="signupBtn" variant="primary" href="/signup">
          Signup
        </Button>
      </div>
    </div>
  );
}

export default Home;
