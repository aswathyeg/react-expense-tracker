import React from "react";
import { Container, Navbar } from "react-bootstrap";

const Header = () => {
  return (
    <Navbar className="headerNavbar">
      <Container>
        <Navbar.Brand>Expense Tracker</Navbar.Brand>
      </Container>
    </Navbar>
  );
};

export default Header;
