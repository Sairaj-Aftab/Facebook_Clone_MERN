import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import profileimg from "../../assets/profile.png";
import FooterArea from "../../components/FooterArea/FooterArea";
import LoginHeader from "../../components/LoginHeader/LoginHeader";
import Cookies from "js-cookie";
import "../../_assets/css/style.css";
import { hideEmailPhone } from "../../utility/helper";
import axios from "axios";
import createToast from "../../utility/toastify/toast";

const FindAccount = () => {
  const navigate = useNavigate();

  const [user, setUser] = useState({
    photo: "",
    name: "",
    email: "",
    phone: "",
  });

  const handleContinue = (e) => {
    e.preventDefault();
    axios
      .post("/api/v1/user/password-reset-otp", {
        auth: user.email ?? user.phone,
      })
      .then((res) => {
        createToast(res.data.message, "success");
        navigate("/activate/reset-password");
      })
      .catch((err) => {
        createToast(err.response.data.message);
      });
  };

  useEffect(() => {
    // Get User Info from Cookie
    const userInfo = JSON.parse(Cookies.get("user")) ?? null;
    if (userInfo) {
      setUser({
        photo: userInfo.photo,
        name: userInfo.name,
        email: userInfo.email ?? null,
        phone: userInfo.phone ?? null,
      });
    }
  }, []);

  const handleNotYou = (e) => {
    e.preventDefault();
    Cookies.remove("user");
    navigate("/forgot");
  };

  return (
    <div>
      <LoginHeader />
      <div className="reset-area">
        <div className="reset-wraper">
          <div className="reset-box">
            <div className="reset-box-header">
              <span className="title">Reset your password</span>
            </div>
            <div className="reset-body">
              <div className="find-user-account">
                <img
                  src={
                    user.photo
                      ? user.photo
                      : "https://media.istockphoto.com/id/1337144146/vector/default-avatar-profile-icon-vector.jpg?b=1&s=170667a&w=0&k=20&c=-qQGlKM8OQsSJCEkHnqS9FI94VRTkZ-7tg0K0u02XL0="
                  }
                  alt=""
                />
                <span>{user.name}</span>
                {user.email && <p>Email : {hideEmailPhone(user.email)}</p>}
                {user.phone && <p>Phone : {hideEmailPhone(user.phone)}</p>}
                <p>To reset your account password, please continue</p>
              </div>
            </div>
            <div className="reset-footer">
              <a href="#"></a>
              <div className="reset-btns">
                <a className="cancel" href="/" onClick={handleNotYou}>
                  Not you ?
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

export default FindAccount;
