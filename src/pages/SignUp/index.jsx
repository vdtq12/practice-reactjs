import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

SignUp.propTypes = {};

function SignUp(props) {
  return (
    <div>
      <h1>You are in Sign Up Page</h1>
      <Link to="/login"> Return to Login Page </Link>
    </div>
  );
}

export default SignUp;
