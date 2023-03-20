import React from "react";
import Button from "react-bootstrap/Button";

const PresentAnimation = () => {
  // return <h1 className="prueba2">Hola</h1>;
  return (
    <article className="presentation__container">
      <p>Hola, soy</p>
      <h1 className="gradient-text">Jose Cardozo</h1>
      <p>Front-End Junior Developer</p>

      <div>
        <Button variant="primary">Descargar Curriculum</Button>{" "}
        <Button>Contactarme Telegram</Button>
      </div>
    </article>
  );
};

export default PresentAnimation;
