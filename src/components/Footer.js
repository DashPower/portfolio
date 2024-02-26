import React from "react";
import { useTranslation } from "react-i18next";

const Footer = () => {
  const [t] = useTranslation("global");

  return (
    <div className="footer">
      <h1>© José Cardozo | {t("presentation.t2")}</h1>
    </div>
  );
};

export default Footer;
