import React from "react";
import { Button, Navbar } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import { useNavigate } from "react-router-dom";

function NavbarComponent() {
  // Retrieving the authentication token from sessionStorage
  const token = sessionStorage.getItem("token");
  const navigate = useNavigate();
  const handleLogout = () => {
    // Removing token and user details from sessionStorage and localStorage
    sessionStorage.removeItem("token");
    localStorage.removeItem("user");
    // Navigating to the home page
    navigate("/");
  };
  return (
    <div>
      <Navbar bg="dark" variant="dark" className="navbar-container">
        <Navbar.Brand href="/" className="logo-name">
          Feedback App
        </Navbar.Brand>
        {token ? (
          <Button
            variant="secondary"
            className="logout-btn"
            onClick={handleLogout}
          >
            Logout{" "}
          </Button>
        ) : (
          ""
        )}
      </Navbar>
    </div>
  );
}

export default NavbarComponent;
