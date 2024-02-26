import React from "react";
import Cards from "./Cards";
import { useTranslation } from "react-i18next";

/* al colocar proyectos nuevos con la tecnologia seguir la siguiente regla tech="tecnologia1,tecnologia2,tecnologia3"*/
const Proyects = () => {
  const [t] = useTranslation("global");

  return (
    <div className="proyects" id="proyects">
      <h1>{t("navbar.t2")}</h1>

      <div className="proyects__container">
        <Cards
          img="/images/cloudLab.png"
          Title="CloudLab"
          Text={t("project.tp1")}
          address="https://cloudlab-s9-16.vercel.app/"
          github="https://github.com/No-Country/s9-16-m-node-react"
          tech="Javascript,NextJS,Redux,ReduxToolkit,TailwindCSS"
        />

        <Cards
          img="/images/EcoSubasta.png"
          Title="EcoSubasta"
          Text={t("project.tp2")}
          address="https://ecosubasta.vercel.app/"
          github="https://github.com/No-Country/s11-02-m-node-react?tab=readme-ov-file"
          tech="Javascript,ReactJS,NextJS,TailwindCSS"
        />

        <Cards
          img="/images/E-medica.png"
          Title="E-Medica"
          Text={t("project.tp3")}
          address="https://dev.d2mgpjd3ipukhz.amplifyapp.com/"
          github="https://github.com/No-Country/NC-C11-31-E-Medica"
          tech="Javascript,ReactJS,NextJS,Bootstrap,Sass"
        />
        <Cards
          img="/images/HolasoyMaviPage.png"
          Title="Hola soy Mavi"
          Text={t("project.tp4")}
          address="https://maviavgs.000webhostapp.com/"
          github="https://github.com/DanielVP26/SoyMavi"
          tech=""
        />
        <Cards
          img="/images/LatinTrade502.png"
          Title="Latin Trade 502"
          Text={t("project.tp5")}
          address="https://latin-trade-coder-house-dashpower.vercel.app/"
          github="https://github.com/DashPower/LatinTrade-CoderHouse"
          tech="JavaScript,ReactJS,Bootstrap,TailwindCSS"
        />
      </div>
    </div>
  );
};

export default Proyects;
