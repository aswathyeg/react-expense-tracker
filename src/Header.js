import React from "react";
import { Container, Navbar } from "react-bootstrap";

const Header = () => {
  return (
    <Navbar variant="dark" bg="dark">
      <Container>
        <Navbar.Brand>Expense Tracker</Navbar.Brand>
      </Container>
    </Navbar>
  );
};

export default Header;
