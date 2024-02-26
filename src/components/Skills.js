import React from "react";
import { useTranslation } from "react-i18next";

const Skills = () => {
  const [t] = useTranslation("global");

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
        <h2>{t("skills.t1")}</h2>
        <img src="/icons/js.png" alt="JavaScript" />
        <img src="/icons/html-5.png" alt="Html" />
        <img src="/icons/css-3.png" alt="Css" />
        <h2>{t("skills.t2")}</h2>
        <img
          src="/icons/bootstrap.png"
          alt="Bootstrap"
          className="filterBoot"
        />

        <img src="/icons/sass.png" alt="Sass" />
        <img src="/icons/atom.png" alt="React" />
        <img src="/icons/nextjs.png" alt="NextJS" className="filterGit" />
        <h2>{t("skills.t3")}</h2>
        <img src="/icons/Figma.png" alt="Figma" />
        <img src="/icons/nodejs.png" alt="NodeJS" />
        <img src="/icons/slack.png" alt="Slack" />
        <img src="/icons/trello.png" alt="Trello" />
        <img src="/icons/github.png" alt="GitHub" className="filterGit" />
      </div>
    </>
  );
};

export default Skills;
