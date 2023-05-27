import React from "react";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { userLogin } from "../../redux/auth/actionType";
import { LOADING_END, LOADING_START } from "../../redux/loadingBar/type";
import createToast from "../../utility/toastify/toast";
import "../../_assets/css/style.css";

const LoginForm = ({ setShowRegister }) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [input, setInput] = useState({
    auth: "",
    password: "",
  });

  // Handle Change Input Value
  const handleChangeInput = (e) => {
    setInput((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  // Handle User Login
  const handleUserLogin = (e) => {
    e.preventDefault();
    if (!input.auth || !input.password) {
      createToast("All fields are required", "error");
    } else {
      dispatch(
        userLogin(
          {
            auth: input.auth,
            password: input.password,
          },
          navigate
        )
      );
    }
  };
  return (
    <div>
      <div class="auth-right">
        <div class="auth-box">
          <form action="" onSubmit={handleUserLogin}>
            <div class="auth-form">
              <input
                type="text"
                name="auth"
                value={input.auth}
                onChange={handleChangeInput}
                placeholder="Email address or phone number"
              />
            </div>
            <div class="auth-form">
              <input
                type="password"
                name="password"
                value={input.password}
                onChange={handleChangeInput}
                placeholder="Password"
              />
            </div>
            <div class="auth-form">
              <button type="submit">Log In</button>
            </div>
          </form>

          <a
            href="/"
            onClick={(e) => {
              e.preventDefault();
              dispatch({ type: LOADING_START });
              navigate("/forgot");
            }}
          >
            Forgotten password?
          </a>

          <div class="divider"></div>

          <button onClick={() => setShowRegister(true)}>
            Create New Account
          </button>
        </div>
        <p>
          <a href="#">Create a Page</a> for a celebrity, brand or business.
        </p>
      </div>
    </div>
  );
};

export default LoginForm;
