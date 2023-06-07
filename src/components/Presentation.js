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
            <a
              href="https://doc-0s-78-docs.googleusercontent.com/docs/securesc/aoef2rlae4i39v4vhikdmcefnrenivn6/0lqor0kcrgt87timujcpfmsl9vtn1n82/1686172050000/11343700632061380807/11343700632061380807/1t8hUmVsrwdP7Qn_759c7CPS8piQP2gcR?e=download&ax=ADWCPKADcuBZk5CSSPJLYJMcOVxq-JAPuFAOTNgojtgouo1OYVDuHKFO1yZxEwQGLxrhY1dgxkVIUmQAAeDOnrlWS9bcynRMh8Nqajs0jqfltiJx6R5MWu9kC9fWMBQT7uSHHhl2DE-9wTkjqs6TuIyep8bvxEaI4Hmh6DhtIe6yaeKjyg9xy_t6-Vrop35HYuX3Thtf_V0xvPyOlsvQAkyPW6UFMV5CbGIuQcLi3J4MnmeIs_LtNp3aglj3x4QtJpAsoSIcfAlZjSL_T6MtPbdm8unEf3pw2SAEZLL7vUa2tkCp-wBIraGv5l9v-j_n6WNGTyrJcim14SQIIUyLlTr8GNnbMnKomqOS7MPRZkJQ39Tu8_i2LYHSfd1GVat1QQ6HJncKk-Xcn1f7hBqOK55EDnw7zu1hRvqlhZcyrz-OejybLagfIRryZ4Ws7xfVJQYzI_FQeSPvlSUXIyXen5liuc_dmFf-bWsOZC7KGlFBWGmMcTSHr6VCKzy3VczN3TYgNuwQ2ijY6FET6OaqwZ26qrbQp9Ni_WI0OJ-jwjmIquLbcCAdQ2ESy7XN7S_XRqsnivR6vfuT3aAZ0Q0bQA0sgSVlGv6-ZcRvji17qdX40q7AmjyCcHuAWTaTMmmhl-adXrNpBc4jPCe-mwa7Rstn9aUUhkp5u-KzxMoWAVZmxHx_gEXV7Ae23owhiNVjanUcXJzY141NN-EJwjvQ_QrTGQ2jAcfHx6OX6V7C-z-OlWkdC1HEg5a71Nvx5jkH_mE1MboJ9N4BS5qXPSNGdtJHrDahW0j3TwICtFWwj8TXyxpaBms9DfeVz-FtMHI7oviMACTEPJJ9eTJj4pIQ8rEJmQXrlh9royxl8hIIl5KqD5qSZURQgIzl6pp6cPtG3bp0eUYxS6bqGKcZdHVKnVCUqmQaFk04ZdAV8Q3yuGusvXKt9iBWJC0mwUl32gHSijkks1JbopuU&uuid=76093a47-dbd2-4fa4-9b52-3e54292b3977&authuser=0"
              download
            >
              <button className="button">
                <span className="material-symbols-outlined icon">download</span>
                Curriculum
              </button>
            </a>
            <a href="https://wa.me/584246926618?">
              <button className="button">
                <span className="fa fa-telegram icon"></span> Contactame
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
