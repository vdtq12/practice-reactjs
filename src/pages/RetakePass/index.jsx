import React from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";

RetakePass.propTypes = {};

function RetakePass(props) {
  return (
    <div>
      <h1>You gonna take your new password here</h1>
      <Link to="/login"> Return to Login Page </Link>
    </div>
  );
}

export default RetakePass;
