import React from "react";
import Header from "./Header";

const Presentation = () => {
  return (
    <div className="panelHero">
      <video muted autoPlay loop className="video1">
        <source src="/videos/Scripting.mp4" />
        Tu navegador no soporta HTML5
      </video>
      <Header />
      <section className="presentation">
        <article className="presentation__container">
          <p>Hola, soy</p>
          <h1 className="gradient-text">Jose Cardozo</h1>
          <p>Front-End Junior Developer</p>

          <div className="buttons">
            <button className="button">
              <span className="material-symbols-outlined icon">download</span>
              Curriculum
            </button>
            <button className="button">
              <span className="fa fa-telegram icon"></span> Contactame
            </button>
          </div>
        </article>
        <article className="containerIcons">
          <ul>
            <li className="icons">
              <i className="bi bi-github"></i>
              <i className="bi bi-linkedin"></i>
              <i className="bi bi-telegram"></i>
            </li>
            <div className="palito"></div>
          </ul>
        </article>
      </section>
    </div>
  );
};

export default Presentation;
