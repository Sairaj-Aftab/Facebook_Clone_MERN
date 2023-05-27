import React from "react";
import facebooklogo from "../../_assets/icons/facebook.svg";
import "../../_assets/css/style.css";
import { Link } from "react-router-dom";

const LoginHeader = () => {
  return (
    <div>
      <div className="reset-header">
        <div className="reset-header-wraper">
          <div className="reset-logo">
            <img src={facebooklogo} alt="" />
          </div>
          <div className="login-part">
            <input type="text" placeholder="Email or mobile number" />
            <input type="text" placeholder="Password" />
            <button>Log In</button>
            <Link to="/forgot">Forgotten account?</Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginHeader;
