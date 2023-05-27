import React from "react";
import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";

const LoginUser = ({ children }) => {
  const { logedIn } = useSelector((state) => state.auth);
  return logedIn ? children : <Navigate to={"/login"} />;
};

export default LoginUser;
