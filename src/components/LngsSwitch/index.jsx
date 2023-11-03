import React from "react";
import PropTypes from "prop-types";
import { useTranslation, Trans } from "react-i18next";
import vieflag from "../../assets/vieflag.png";
import engflag from "../../assets/engflag.png";

LngsSwitch.propTypes = {};


function LngsSwitch(props) {
  const { t, i18n } = useTranslation();

  const handleChangeLngs = (cur) => {
    if (cur === "vi") {
      i18n.changeLanguage("vi");
    } else if (cur === "en") {
      i18n.changeLanguage("en");
    }
  };

  return (
    <div className="flex justify-center bg-lightblue p-1 m-auto mt-[24px] rounded-lg">
      <button
        style={{
          backgroundColor: i18n.resolvedLanguage === "vi" ? "#77A5EE" : "",
        }}
        type="button"
        onClick={() => handleChangeLngs("vi")}
        className="flex rounded-lg px-2 py-1 gap-2"
      >
        <img src={vieflag} alt="" className="m-0.5" />
        <span className="font-medium">VIE</span>
      </button>
      <button
        style={{
          backgroundColor: i18n.resolvedLanguage === "en" ? "#77A5EE" : "",
        }}
        type="button"
        onClick={() => handleChangeLngs("en")}
        className="flex rounded-lg px-2 py-1 gap-2"
      >
        <img src={engflag} alt="" className="m-0.5" />
        <span className="font-medium">ENG</span>
      </button>
    </div>
  );
}

export default LngsSwitch;
