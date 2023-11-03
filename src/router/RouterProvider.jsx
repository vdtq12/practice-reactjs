import React from "react";
import PropTypes from "prop-types";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import LogIn from "../pages/LogIn";
import SignUp from "../pages/SignUp";
import RetakePass from "../pages/RetakePass";
import Home from "../pages/Home";
import Device from "../pages/Device";
import NotFound from "../pages/NotFound";
import { useSelector } from "react-redux";
import Cookies from "js-cookie";
import ImageDisplay from "../components/syncImg/ImageDisplay";
import ImageUpload from "../components/syncImg/ImageUpload";

RouterProvider.propTypes = {};

function RouterProvider(props) {
  const isAuth =
    useSelector((state) => state.user.token) || Cookies.get('token');

  return (
    <div>
      {/* <ImageUpload />
      <ImageDisplay /> */}
      {isAuth ? (
        <Routes>
          <Route path="/home" element={<Home />}></Route>
          <Route path="/device" element={<Device />}></Route>
          <Route path="/login" element={<Navigate to="/home" replace />}></Route>
          <Route path="/signup" element={<Navigate to="/home" replace />}></Route>
          <Route path="/retakepass" element={<Navigate to="/home" replace />}></Route>

          <Route path="*" element={<NotFound />}></Route>
        </Routes>
      ) : (
        <Routes>
          <Route path="/login" element={<LogIn />}></Route>
          <Route path="/signup" element={<SignUp />}></Route>
          <Route path="/retakepass" element={<RetakePass />}></Route>

          <Route path="*" element={<Navigate to="/login" replace />} />
        </Routes>
      )}
    </div>
  );
}

export default RouterProvider;
