import React, { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import { useDispatch } from "react-redux";
import Cookie from "js-cookie";
import facebooksvg from "../../_assets/icons/facebook.svg";
import "./activate.css";
import {
  activateAccountByOtp,
  checkPasswordResetOTP,
  sendResendLinkMail,
  sendResendMessageForPassword,
} from "../../redux/auth/actionType";
import createToast from "../../utility/toastify/toast";
import LoginHeader from "../../components/LoginHeader/LoginHeader";
import FooterArea from "../../components/FooterArea/FooterArea";

const Activate = () => {
  const { type } = useParams();

  const navigate = useNavigate();
  const dispatch = useDispatch();
  // get Activation Email for User
  const auth = Cookie.get("otp");

  //   Cancel
  const handleCancel = (e) => {
    e.preventDefault();
    Cookie.remove("otp");
    navigate("/login");
  };

  useEffect(() => {
    if (!auth) {
      navigate("/login");
    }
  });

  // Change Value
  const [code, setCode] = useState();

  const handleChangeValue = (e) => {
    setCode(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!code) {
      createToast("Please put the OTP code", "error");
    } else {
      dispatch(
        activateAccountByOtp(
          {
            code: code,
            auth: auth,
          },
          navigate
        )
      );
    }
  };

  // Password Reset Handle
  const handleResetPassword = (e) => {
    e.preventDefault();
    if (!code) {
      createToast("Please put the OTP code", "error");
    } else {
      dispatch(
        checkPasswordResetOTP(
          {
            code: code,
            auth: auth,
          },
          navigate
        )
      );
    }
  };
  // For getting Resend email for resend code and link for activate account
  const handleResendCode = (e) => {
    e.preventDefault();
    if (!auth) {
      createToast("Cannot find any email or phone number", "error");
    } else {
      dispatch(
        sendResendLinkMail({
          auth: auth,
        })
      );
    }
  };

  // Send Resend Email or Message for for forgot or recovery or set new password
  const handleResendCodeForPassword = (e) => {
    e.preventDefault();
    if (!auth) {
      createToast("Cannot find any email or phone number", "error");
    } else {
      dispatch(
        sendResendMessageForPassword({
          auth: auth,
        })
      );
    }
  };

  // Switch Case for type and page changes
  const handleManage = (type) => {
    switch (type) {
      case "account":
        return handleSubmit;

      case "reset-password":
        return handleResetPassword;

      default:
        break;
    }
  };

  // Didn't get code handle manager
  const getCodeHandleManager = (type) => {
    switch (type) {
      case "account":
        return handleResendCode;
      case "reset-password":
        return handleResendCodeForPassword;

      default:
        break;
    }
  };
  return (
    <div>
      <LoginHeader />
      <div class="activate-form">
        <div class="card">
          <div class="title">
            <h1>Enter security code</h1>
          </div>
          <div class="content">
            <p>
              Please check your email for a message with your code. Your code is
              6 number long.
            </p>
            <form action="">
              <div class="middle-content">
                <input type="text" onChange={handleChangeValue} />
                <div class="email">
                  <p>We sent your code</p>
                  <p>To: {auth}</p>
                </div>
              </div>
              <div class="bottom">
                <a onClick={getCodeHandleManager(type)} href="/">
                  <span>Didn't get a code?</span>
                </a>
                <div class="button">
                  <button class="cancel" onClick={handleCancel}>
                    Cancel
                  </button>
                  <button
                    type="submit"
                    class="continue"
                    onClick={handleManage(type)}
                  >
                    Continue
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
      <FooterArea />
    </div>
  );
};

export default Activate;
