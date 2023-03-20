import React, { useState } from "react";
import styled from "styled-components";
import PresentAnimation from "./PresentAnimation";
import { useInterval } from "react-use";

const Presentation = () => {
  const [rain, setRain] = useState([{ key: 0, emoji: "i", offset: 0 }]);
  /* useInterval(() => {
    const offset = Math.floor(Math.random() * 1000);
    const key = offset + Math.floor(Math.random() * 100000);
    const emoji = "i";
    rain.push({ offset, key, emoji });
    setRain([...rain]);
  }, 500);
  */

  return (
    // <Prueba>
    //   {rain.map(({ key, emoji }) => {
    //     return <PresentAnimation key={key}>{emoji}</PresentAnimation>;
    //   })}
    // </Prueba>

    <section className="presentation">
      <PresentAnimation />
      <article>
        <span className="material-symbols-outlined">mail</span>
        <span className="material-symbols-outlined">terminal</span>
        <span className="material-symbols-outlined">diversity_3</span>
      </article>
    </section>
  );
};

export default Presentation;

const Prueba = "styled.div";
