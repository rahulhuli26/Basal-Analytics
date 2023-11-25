import React from "react";
import { Navbar } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

function NavbarComponent() {
  return (
    <div>
      <Navbar bg="dark" variant="dark" className="navbar-container">
        <Navbar.Brand href="/" className="logo-name">
          Feedback App
        </Navbar.Brand>
      </Navbar>
    </div>
  );
}

export default NavbarComponent;
