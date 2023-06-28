import React from "react";

const About = () => {
  return (
    <div className="about" id="about">
      <img
        className="about__img"
        src="/images/FotoPerfil.jpg"
        alt="Foto de perfil"
      />
      <div className="about__info">
        <h3 className="about__tittle"> Sobre mi</h3>
        <p className="abaout__text">
          Soy técnico superior en electrónica, especialista en el manejo de
          tecnología FTTH. Hace tiempo que estoy interesado en la programación y
          hoy en día, he decidido cambiar completamente mi rumbo profesional
          dedicándome al Desarrollo Front-end. <br /> <br /> Constantemente
          adquiero conocimientos que me ayudan a crecer en este mundo de la
          programación web, aprendiendo tecnologías como React, Firebase,
          Bootstrap, NextJS, Sass, HTML, CSS y Javascript.
        </p>
      </div>
    </div>
  );
};

export default About;
