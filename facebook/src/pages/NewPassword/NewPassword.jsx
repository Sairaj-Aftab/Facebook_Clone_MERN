import React from "react";
import { useState } from "react";
import { useDispatch } from "react-redux";
import FooterArea from "../../components/FooterArea/FooterArea";
import LoginHeader from "../../components/LoginHeader/LoginHeader";
import { changePassword } from "../../redux/auth/actionType";
import createToast from "../../utility/toastify/toast";
import Cookies from "js-cookie";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";

const NewPassword = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [password, setPassword] = useState("");

  // Get Information from Cookies
  useEffect(() => {}, []);
  // Handle Continue For Change Password
  const handleContinue = (e) => {
    e.preventDefault();
    if (!password) {
      createToast("Field is required");
    } else {
      dispatch(
        changePassword(
          {
            id: Cookies.get("user-id"),
            code: Cookies.get("code"),
            password: password,
          },
          navigate
        )
      );
    }
  };

  // Handle Cancle
  const handleSkip = (e) => {
    e.preventDefault();
    Cookies.remove("otp");
    Cookies.remove("code");
    Cookies.remove("user-id");
    Cookies.remove("user");
    navigate("/login");
  };
  return (
    <div>
      <LoginHeader />
      <div className="reset-area">
        <div className="reset-wraper">
          <div className="reset-box">
            <div className="reset-box-header">
              <span className="title">Choose a new password</span>
            </div>
            <div className="reset-body">
              <p>
                Create a new password that is at least 6 characters long. A
                strong password has a combination of letters, digits and
                punctuation marks.
              </p>
              <div className="code-box">
                <input
                  className="w-100"
                  type="text"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="New password"
                />
              </div>
            </div>
            <div className="reset-footer">
              <a href="#"></a>
              <div className="reset-btns">
                <a className="cancel" href="/" onClick={handleSkip}>
                  Skip
                </a>
                <a className="continue" href="/" onClick={handleContinue}>
                  Continue
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

export default NewPassword;
