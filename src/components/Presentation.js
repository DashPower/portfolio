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
          <h1 className="gradient-text">José Cardozo</h1>
          <p>Front-End Junior Developer</p>

          <div className="buttons">
            <a href="CV-Jose-Cardozo.pdf" download>
              <button className="button">
                <span className="material-symbols-outlined icon">download</span>
                Currículum
              </button>
            </a>

            <a href="https://wa.me/584246926618?">
              <button className="button">
                <i className=" bi-envelope"></i> Contáctame
              </button>
            </a>
          </div>
        </article>
        <article className="containerIcons">
          <ul>
            <li className="icons">
              <a href="https://github.com/DashPower">
                <i className="bi bi-github"></i>
              </a>
              <a href="https://www.linkedin.com/in/cardozjg/">
                <i className="bi bi-linkedin"></i>
              </a>
              <a href="https://mail.google.com/mail/u/0/#inbox?compose=GTvVlcSDbtmMJLtMLsZMvsQbRPlbqKZLblpqgPQnxrxJFDlHQTGHTVvqcQWztWVMtcDfPwWsCJPdJ">
                <i className="bi bi-telegram"></i>
              </a>
            </li>
            <div className="palito"></div>
          </ul>
        </article>
      </section>
    </div>
  );
};

export default Presentation;
