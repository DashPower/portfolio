import React from "react";

const About = () => {
  return (
    <div className="about">
      <img
        className="about__img"
        src="/images/FotoPerfil.jpg"
        alt="Foto de perfil"
      />
      <div className="about__info">
        <h3 className="about__tittle"> Quien soy?</h3>
        <p className="abaout__text">
          Soy técnico superior en electrónica, especialista en el manejo de
          tecnología FTTH. Hace tiempo que estoy interesado en la programación y
          hoy en día, he decidido cambiar completamente mi rumbo profesional
          dedicándome al Desarrollo Front-end. Constantemente adquiero
          conocimientos que me ayudan a crecer en este mundo de la programación
          web, aprendiendo tecnologías como React, Firebase, Bootstrap,
          MaterialUI, Sass, HTML, CSS y Javascript.
        </p>
      </div>
    </div>
  );
};

export default About;
