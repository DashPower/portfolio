import React from "react";
import { useTranslation } from "react-i18next";

const About = () => {
  const [t] = useTranslation("global");

  return (
    <div className="about" id="about">
      <img
        className="about__img"
        src="/images/FotoPerfil.jpg"
        alt="Foto de perfil"
      />
      <div className="about__info">
        <h3 className="about__tittle">{t("navbar.t1")}</h3>
        <p className="abaout__text">
          {t("about.t1")}
          <br /> <br /> {t("about.t2")}
        </p>
      </div>
    </div>
  );
};

export default About;
