import React from "react";
import Cards from "./Cards";

const Proyects = () => {
  return (
    <div className="proyects" id="proyects">
      <h1>Mis proyectos</h1>

      <div className="proyects__container">
        <Cards
          img="/images/dozPage.png"
          Title="Digital Service Office"
          Text="Página web informativa, creada para empresa de servicio técnico de
          reparación de computadoras y equipos informáticos
"
          address="https://digitalserviceoffice.000webhostapp.com/"
          github="https://github.com/DashPower/Proyecto_final"
        />
        <Cards
          img="/images/dotaStorePage.png"
          Title="DotaStore"
          Text="DotaStore, es un comercio digital que ofrece una amplia variedad  de productos relacionados al juego del género MOBA: Defense of The Ancient, mejor conocido como DOTA 2."
          address="https://ecommerce-react-lovat.vercel.app/"
          github="https://github.com/DashPower/ecommerce-react"
        />
        <Cards
          img="/images/E-medica.png"
          Title="E-Medica"
          Text="E-Médica es una plataforma para el agendamiento y la realización de consultas médicas virtuales 🩺. Agiliza el proceso de búsqueda 🔍, agendamiento 🕮 y consulta 👨‍⚕️, pues permite encontrar profesionales de la salud según su especialidad ⚕️, eliminando la necesidad de desplazarse físicamente 🚗, cuando no es necesario, y permitiendo que los usuarios conozcan la agenda del especialista en tiempo real 📆.
"
          address="https://dev.d2mgpjd3ipukhz.amplifyapp.com/"
          github="https://github.com/No-Country/NC-C11-31-E-Medica"
        />
      </div>
    </div>
  );
};

export default Proyects;
