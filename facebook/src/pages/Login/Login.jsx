import React, { useState } from "react";
import facebooksvg from "../../_assets/icons/facebook.svg";
import "../../_assets/css/style.css";
import RegisterForm from "../../components/RegisterForm/RegisterForm";
import LoginForm from "../../components/LoginForm/LoginForm";

const Login = () => {
  const [showRegister, setShowRegister] = useState(false);

  return (
    <div>
      <div class="fb-auth">
        <div class="auth-wraper">
          <div class="auth-left">
            <img src={facebooksvg} alt="" />
            <h2>
              Facebook helps you connect and share with the people in your life.
            </h2>
          </div>
          <LoginForm setShowRegister={setShowRegister} />
        </div>
      </div>

      <div class="fb-footer">
        <div class="footer-wraper">
          <div class="footer-top">
            <ul>
              <li>
                <a href="#">English (UK)</a>
              </li>
              <li>
                <a href="#">বাংলা</a>
              </li>
              <li>
                <a href="#">অসমীয়া</a>
              </li>
              <li>
                <a href="#">हिन्दी</a>
              </li>
              <li>
                <a href="#">नेपाली</a>
              </li>
              <li>
                <a href="#">Bahasa Indonesia</a>
              </li>
              <li>
                <a href="#">العربية</a>
              </li>
              <li>
                <a href="#">中文(简体)</a>
              </li>
              <li>
                <a href="#">Bahasa Melayu</a>
              </li>
              <li>
                <a href="#">Español</a>
              </li>
              <li>
                <a href="#">Português (Brasil)</a>
              </li>
            </ul>
          </div>
          <div class="divider-0"></div>
          <div class="footer-bottom">
            <ul>
              <li>
                <a href="#">Sign Up</a>
              </li>
              <li>
                <a href="#">Log in</a>
              </li>
              <li>
                <a href="#">Messenger</a>
              </li>
              <li>
                <a href="#">Facebook Lite</a>
              </li>
              <li>
                <a href="#">Watch</a>
              </li>
              <li>
                <a href="#">Places</a>
              </li>
              <li>
                <a href="#">Games</a>
              </li>
              <li>
                <a href="#">Marketplace</a>
              </li>
              <li>
                <a href="#">Meta Pay</a>
              </li>
              <li>
                <a href="#">Oculus</a>
              </li>
              <li>
                <a href="#">Portal</a>
              </li>
              <li>
                <a href="#">Instagram</a>
              </li>
              <li>
                <a href="#">Bulletin</a>
              </li>
              <li>
                <a href="#">Fundraisers</a>
              </li>
              <li>
                <a href="#">Services</a>
              </li>
              <li>
                <a href="#">Voting Information Centre</a>
              </li>
              <li>
                <a href="#">Groups</a>
              </li>
              <li>
                <a href="#">About</a>
              </li>
              <li>
                <a href="#">Create ad</a>
              </li>
              <li>
                <a href="#">Create Page</a>
              </li>
              <li>
                <a href="#">Developers</a>
              </li>
              <li>
                <a href="#">Careers</a>
              </li>
              <li>
                <a href="#">Privacy Policy</a>
              </li>
              <li>
                <a href="#">Privacy Centre</a>
              </li>
              <li>
                <a href="#">Cookies</a>
              </li>
              <li>
                <a href="#">AdChoices</a>
              </li>
              <li>
                <a href="#">Terms</a>
              </li>
              <li>
                <a href="#">Help</a>
              </li>
              <li>
                <a href="#">Contact uploading and non-users</a>
              </li>
              <li>
                <a href="#">Settings</a>
              </li>
              <li>
                <a href="#">Activity log</a>
              </li>
            </ul>
          </div>
          <p>Meta © 2022</p>
        </div>
      </div>
      {showRegister && <RegisterForm setShowRegister={setShowRegister} />}
    </div>
  );
};

export default Login;
