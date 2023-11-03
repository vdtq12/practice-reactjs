import React, { useState } from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import { useTranslation, Trans } from "react-i18next";
import { Eye, EnvelopeSimple, Lock, EyeClosed } from "@phosphor-icons/react";

LogInField.propTypes = {
  onSubmitForm: PropTypes.func,
};

LogInField.defaultTypes = {
  onSubmitForm: null,
};

function LogInField(props) {
  const { onSubmitForm } = props;

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isVisiblePass, setIsVisiblePass] = useState(false);
  const { t, i18n } = useTranslation();

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!onSubmitForm) return;
    onSubmitForm(email, password);
  };

  return (
    <div className="w-[100%]">
      <form
        action=""
        onSubmit={(e) => handleSubmit(e)}
        className="flex flex-col gap-6"
      >
        <h1 className="text-primary font-semibold text-2xl">{t("login")}</h1>
        <label>
          {t("email")}
          <div className="flex border p-[8px] rounded-md border-secondary border-opacity-50">
            <EnvelopeSimple className="w-[24px] h-[24px] mx-[4px]" />
            <input
              type="email"
              placeholder={t("your email")}
              name=""
              value={email}
              onChange={(e) => handleEmailChange(e)}
              required
              className="bg-transparent outline-none w-[80%]"
            />
          </div>
        </label>
        <label>
          {t("password")}
          <div className="flex border p-[8px] rounded-md border-secondary border-opacity-50">
            <Lock className="w-[24px] h-[24px] mx-[4px]" />
            <input
              type={isVisiblePass ? "text" : "password"}
              placeholder={t("your password")}
              name=""
              value={password}
              onChange={(e) => handlePasswordChange(e)}
              required
              className="bg-transparent outline-none w-[80%]"
            />
            {isVisiblePass ? (
              <Eye
                className="w-[24px] h-[24px] mx-[4px] cursor-pointer float-right"
                onClick={() => setIsVisiblePass((prevState) => !prevState)}
              />
            ) : (
              <EyeClosed
                className="w-[24px] h-[24px] mx-[4px] cursor-pointer float-right"
                onClick={() => setIsVisiblePass((prevState) => !prevState)}
              />
            )}
          </div>
        </label>
        <div className="">
          <label htmlFor="">
            <input type="checkbox" /> {t("remember-me")}
          </label>
          <Link
            to="/retakepass"
            className="text-primary font-semibold float-right"
          >
            {" "}
            {t("forgot-password")}{" "}
          </Link>
        </div>
        <input
          type="submit"
          value={t("login")}
          className="bg-primary text-white w-full cursor-pointer rounded-lg h-40px py-[12px] font-semibold "
        />
        <p>
          {t("dont have account yet ? ")}
          <Link to="/signup" className="text-primary font-semibold">
            {t("sign up")}
          </Link>
        </p>
      </form>
    </div>
  );
}

export default LogInField;
