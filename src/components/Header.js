import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { useState } from "react";
import { useTranslation } from "react-i18next";
function BasicExample() {
  const [color, setColor] = useState("");
  const [stick, setStick] = useState("");
  const [t, i18n] = useTranslation("global");

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
          <Nav className="me-auto ">
            <Nav.Link href="#about">{t("navbar.t1")}</Nav.Link>

            {stick}
            <Nav.Link href="#proyects">{t("navbar.t2")}</Nav.Link>
            {stick}
            <Nav.Link href="#contact"> {t("navbar.t3")}</Nav.Link>
            <div>
              <ul className="countrys">
                <li>
                  <img
                    src="/images/es.png"
                    alt="es"
                    onClick={() => {
                      i18n.changeLanguage("es");
                    }}
                  />
                </li>
                <li>
                  <img
                    src="/images/en.png"
                    alt="en"
                    onClick={() => {
                      i18n.changeLanguage("en");
                    }}
                  />
                </li>
                {/* <li>
                  <img
                    src="/images/pt.png"
                    alt="pt"
                    onClick={() => {
                      i18n.changeLanguage("pt");
                    }}
                  />
                </li> */}
              </ul>
            </div>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default BasicExample;
