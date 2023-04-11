import React from "react";

const Skills = () => {
  return (
    <>
      <video
        muted
        loop
        autoPlay
        src="/videos/Programming.mp4"
        className="video1"
      ></video>
      <div className="skills">
        <h2>Lenguajes</h2>
        <img src="/icons/js.png" alt="JavaScript" />
        <img src="/icons/html-5.png" alt="Html" />
        <img src="/icons/css-3.png" alt="Css" />
        <h2>Frameworks y librerias</h2>
        <img src="/icons/bootstrap.png" alt="Bootstrap" />
        <img src="/icons/sass.png" alt="Sass" />
        <img src="/icons/atom.png" alt="React" />
        <h2>Herramientas</h2>
        <img src="/icons/Figma.png" alt="Figma" />
        <img src="/icons/nodejs.png" alt="NodeJS" />
        <img src="/icons/slack.png" alt="Slack" />
        <img src="/icons/trello.png" alt="Trello" />
        <img src="/icons/github.png" alt="GitHub" />
      </div>
    </>
  );
};

export default Skills;
