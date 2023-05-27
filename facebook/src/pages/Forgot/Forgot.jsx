import axios from "axios";
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import FooterArea from "../../components/FooterArea/FooterArea";
import LoginHeader from "../../components/LoginHeader/LoginHeader";
import createToast from "../../utility/toastify/toast";
import "../../_assets/css/style.css";

const Forgot = () => {
  const navigate = useNavigate();
  const [auth, setAuth] = useState("");

  const handleChangeValue = (e) => {
    setAuth(e.target.value);
  };

  // Search User Account
  const handleSearchUser = (e) => {
    e.preventDefault();
    if (!auth) {
      createToast("Field is required");
    } else {
      axios
        .post("/api/v1/user/find-user", { auth: auth })
        .then((res) => {
          navigate("/find-account");
        })
        .catch((err) => {
          createToast(err.response.data.message);
        });
    }
  };
  return (
    <div>
      <LoginHeader />
      <div className="reset-area">
        <div className="reset-wraper">
          <div className="reset-box">
            <div className="reset-box-header">
              <span className="title">Find Your Account</span>
            </div>
            <div className="reset-body">
              <p>
                Please enter your email address or mobile number to search for
                your account.
              </p>
              <div className="code-box">
                <input
                  className="w-100"
                  type="text"
                  value={auth}
                  onChange={handleChangeValue}
                  placeholder="Email address or mobile number"
                />
              </div>
            </div>
            <div className="reset-footer">
              <a href="#"></a>
              <div className="reset-btns">
                <Link to="/login" className="cancel">
                  Cancel
                </Link>
                <a className="continue" href="/" onClick={handleSearchUser}>
                  Search
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <FooterArea />
    </div>
  );
};

export default Forgot;
