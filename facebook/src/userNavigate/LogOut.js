import React from "react";
import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";

const LogOut = ({ children }) => {
  const { logedIn } = useSelector((state) => state.auth);
  return logedIn === false ? children : <Navigate to={"/"} />;
};

export default LogOut;
