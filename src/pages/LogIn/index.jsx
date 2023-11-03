import React from "react";
import PropTypes from "prop-types";
import Slider from "../../components/Slider";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { loginThunk } from "../../redux/reducer/user";
import LogInField from "../../components/LogInField";
import logo from "../../assets/logo.png";
import LngsSwitch from "../../components/LngsSwitch";

LogIn.propTypes = {};

function LogIn(props) {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleFormSubmit = (username, password) => {
    dispatch(loginThunk({ username, password })).then((res) => {
      if (res.type === "postUser/fulfilled") {
        navigate("/device");
      } else {
        navigate("/login");
      }
    });
  };

  return (
    <div className="bg-background h-[100vh] text-secondary w-screen grid grid-cols-12 gap-[2%]">
      <div className=" bg-secondbg grid col-start-2 col-end-5 flex-col self-center h-fit p-[40px] mx-[-15%] rounded-[32px]">
        <img src={logo} alt="" className="m-auto mb-6 h-10" />
        <LogInField onSubmitForm={handleFormSubmit} />
        <LngsSwitch />
      </div>
      <Slider />
    </div>
  );
}

export default LogIn;
