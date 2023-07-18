import React from "react";

const Contact = () => {
  return (
    <div>
      <div className="content" id="contact">
        <h1 className="logo">Contáctame</h1>
        <div className="contact-wrapper">
          <div className="contact-form">
            <form action="">
              <p>
                <label>Nombre Completo</label>
                <input type="text" name="fullname" />
              </p>
              <p>
                <label>Correo Electrónico</label>
                <input type="email" name="email" />
              </p>
              <p>
                <label>Teléfono</label>
                <input type="tel" name="phone" />
              </p>
              <p>
                <label>Asunto</label>
                <input type="text" name="affair" />
              </p>
              <p className="block">
                <label>Mensaje</label>
                <textarea name="message" rows="3"></textarea>
              </p>
              <p className="block">
                <button type="submit">Enviar</button>
              </p>
            </form>
          </div>{" "}
          <div className="contact-info">
            <h4>Información Adicional</h4>
            <ul>
              <li>
                <i className=" bi-geo-alt"></i> Maracaibo Edo. Zulia, Venezuela
              </li>
              <li>
                <i className=" bi-phone"></i>+58 4246926618
              </li>
              <li>
                <i className=" bi-envelope"></i> cardoz.jg@gmail.com
              </li>
            </ul>
            <p>
              "Ningún hombre puede cruzar el mismo río dos veces, porque ni el
              hombre ni el agua serán los mismos."
              <br />
              <br /> -Heráclito-
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
