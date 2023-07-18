import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { useState } from "react";

function BasicExample() {
  const [color, setColor] = useState("");
  const [stick, setStick] = useState("");

  return (
    <Navbar
      expand="lg"
      className={`${color} bg-body-tertiary`}
      onToggle={(expanded) => {
        if (expanded) {
          setColor("bg-color");
          setStick("");
        } else {
          setColor("");
          setStick("|");
        }
      }}
    >
      <Container>
        <Navbar.Brand href="#home">
          <img src="/images/logoBlanco.png" alt="" className="logoImg" />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#about">Sobre mi</Nav.Link>
            {stick}
            <Nav.Link href="#proyects"> Proyectos</Nav.Link>
            {stick}
            <Nav.Link href="#contact"> Contáctame</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default BasicExample;
