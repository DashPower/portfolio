import React from "react";

const Contact = () => {
  return (
    <div className="contact" id="contact">
      <div className="social">
        <h1>Informacion de Contacto</h1>
        <ul>
          <li className="icons">
            <i class="iconContact bi-telephone">+58 4246926618</i>
          </li>
          <li className="icons">
            <i className=" iconContact bi-github">
              <a href="https://github.com/DashPower">DashPower</a>
            </i>
            <i className=" iconContact bi-linkedin">
              <a href="https://www.linkedin.com/in/cardozjg/">CardozJg</a>
            </i>
            <i className=" iconContact bi-envelope">
              <a href="https://mail.google.com/mail/u/0/#inbox?compose=CllgCJftMStqjHdBZScVdMWmSwPJvlstKTjKRWQZtBdkwsvJkNVndjsSWSwqngknFpQSJFvnPXB">
                cardoz.jg@gmail.com
              </a>
            </i>
          </li>
          <div className="palitoSocial"></div>
        </ul>
      </div>
      <div class="formulario">
        <h1>Contactame</h1>

        <form action="submeter-formulario.php" method="post">
          <div className="contactDiv">
            <div className="div1Contact">
              <p>
                <label for="nombre" class="colocar_nombre">
                  Nombre
                  <span class="obligatorio">*</span>
                </label>
                <input
                  type="text"
                  name="introducir_nombre"
                  id="nombre"
                  required="obligatorio"
                  placeholder="Escribe tu nombre"
                />
              </p>

              <p>
                <label for="email" class="colocar_email">
                  Email
                  <span class="obligatorio">*</span>
                </label>
                <input
                  type="email"
                  name="introducir_email"
                  id="email"
                  required="obligatorio"
                  placeholder="Escribe tu Email"
                />
              </p>
            </div>
            <div className="div2Contact">
              {" "}
              <p>
                <label for="asunto" class="colocar_asunto">
                  Asunto
                  <span class="obligatorio">*</span>
                </label>
                <input
                  type="text"
                  name="introducir_asunto"
                  id="assunto"
                  required="obligatorio"
                  placeholder="Escribe un asunto"
                />
              </p>
              <p>
                <label for="mensaje" class="colocar_mensaje">
                  Mensaje
                  <span class="obligatorio">*</span>
                </label>
                <textarea
                  name="introducir_mensaje"
                  class="texto_mensaje"
                  id="mensaje"
                  required="obligatorio"
                  placeholder="Deja aquí tu comentario..."
                ></textarea>
              </p>
            </div>
          </div>

          <button
            type="submit"
            name="enviar_formulario"
            id="enviar"
            className="buttonForm"
          >
            <p>Enviar</p>
          </button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
