import React from "react";
import LoginForm from "../../components/LoginForm/LoginForm";

const LoginSecond = () => {
  return (
    <div
      className="login-second"
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        height: "100vh",
      }}
    >
      <LoginForm />
    </div>
  );
};

export default LoginSecond;
