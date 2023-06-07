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
          Text="Pagina web informativa creada para empresa de servicio tecnico de
              reaparacion de computadoras y equipos informaticos"
          address="https://digitalserviceoffice.000webhostapp.com/"
          github="https://github.com/DashPower/Proyecto_final"
        />
        <Cards
          img="/images/dotaStorePage.png"
          Title="DotaStore"
          Text="DotaStore es un comercio digital que ofrece una amplia variedad productos relacionados al juego MOBA Defense of The Ancient mejor conocido como DOTA."
          address="https://ecommerce-react-lovat.vercel.app/"
          github="https://github.com/DashPower/ecommerce-react"
        />
      </div>
    </div>
  );
};

export default Proyects;
