import React from "react";
import PropTypes from "prop-types";
import { useDispatch } from "react-redux";
import { logoutThunk } from "../../redux/reducer/user";
import { Link } from "react-router-dom";
LogOut.propTypes = {};

function LogOut(props) {
  const dispatch = useDispatch();

  const handleLogout = () => {
    dispatch(logoutThunk())
  };

  return (
    <div>
      <Link to="/login" onClick={handleLogout}>
        Logout
      </Link>
    </div>
  );
}

export default LogOut;
