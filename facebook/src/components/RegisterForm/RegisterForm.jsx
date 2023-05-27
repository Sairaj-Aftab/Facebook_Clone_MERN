import React, { useState } from "react";
import { useDispatch } from "react-redux";
import cross from "../../_assets/icons/cross.png";
import "../../_assets/css/style.css";
import createToast from "../../utility/toastify/toast";
import { registerUser } from "../../redux/auth/actionType";
import { useNavigate } from "react-router-dom";

// Register Day
const day = [
  1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22,
  23, 24, 25, 26, 27, 28, 29, 30, 31,
];

const months = [
  "Jan",
  "Feb",
  "Mar",
  "Apr",
  "May",
  "June",
  "July",
  "Aug",
  "Sept",
  "Oct",
  "Nov",
  "Dec",
];

// Get year
const years = Array.from(
  { length: 50 },
  (_, i) => new Date().getFullYear() - i
);

let date = new Date();

const RegisterForm = ({ setShowRegister }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [input, setInput] = useState({
    fname: "",
    sname: "",
    emailOrPhone: "",
    password: "",
    gender: "",
    day: "1",
    month: "Jan",
    year: date.getFullYear(),
  });

  // HandleValueChange
  const handleChangeInput = (e) => {
    setInput((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  // Handle Input Validate
  const [validate, setValidate] = useState({
    fname: false,
    sname: false,
    emailOrPhone: false,
    password: false,
  });

  const handleInputValidate = (e) => {
    const fieldName = e.target.name;
    if (!input[fieldName]) {
      setValidate((prev) => ({
        ...prev,
        [fieldName]: true,
      }));
    } else {
      setValidate((prev) => ({
        ...prev,
        [fieldName]: false,
      }));
    }
  };

  const handleInputValidateFocus = (e) => {
    const fieldName = e.target.name;

    setValidate((prev) => ({
      ...prev,
      [fieldName]: false,
    }));
  };

  // Submit Form
  const handleSubmitForm = (e) => {
    e.preventDefault();
    if (
      !input.fname ||
      !input.sname ||
      !input.emailOrPhone ||
      !input.password ||
      !input.gender
    ) {
      createToast("All fields are required");
    } else {
      dispatch(
        registerUser(
          {
            first_name: input.fname,
            sur_name: input.sname,
            auth: input.emailOrPhone,
            password: input.password,
            gender: input.gender,
            birth_date: input.day,
            birth_month: input.month,
            birth_year: input.year,
          },
          e,
          setInput,
          setShowRegister,
          navigate
        )
      );
    }
  };

  return (
    <div>
      <div className="blur-box">
        <div className="sign-up-card">
          <div className="sign-up-header">
            <div className="sign-up-content">
              <span>Sign Up</span>
              <span>It's quick and easy.</span>
            </div>
            <button onClick={() => setShowRegister(false)}>
              <img src={cross} alt="" />
            </button>
          </div>
          <div className="sign-up-body">
            <form action="" onSubmit={handleSubmitForm}>
              <div className="reg-form reg-form-inline">
                <input
                  className={validate.fname && "error-border"}
                  type="text"
                  name="fname"
                  value={input.fname}
                  onChange={handleChangeInput}
                  onBlur={handleInputValidate}
                  onFocus={handleInputValidateFocus}
                  placeholder="First Name"
                />
                <input
                  className={validate.sname && "error-border"}
                  type="text"
                  name="sname"
                  value={input.sname}
                  onChange={handleChangeInput}
                  onBlur={handleInputValidate}
                  onFocus={handleInputValidateFocus}
                  placeholder="Surname"
                />
              </div>
              <div className="reg-form">
                <input
                  className={validate.emailOrPhone && "error-border"}
                  type="text"
                  name="emailOrPhone"
                  value={input.emailOrPhone}
                  onChange={handleChangeInput}
                  onBlur={handleInputValidate}
                  onFocus={handleInputValidateFocus}
                  placeholder="Mobile number or email address"
                />
              </div>
              <div className="reg-form">
                <input
                  className={validate.password && "error-border"}
                  type="password"
                  name="password"
                  value={input.password}
                  onChange={handleChangeInput}
                  onBlur={handleInputValidate}
                  onFocus={handleInputValidateFocus}
                  placeholder="New password"
                />
              </div>
              <div className="reg-form">
                <span>Date of birth</span>
                <div className="reg-form-select">
                  <select name="day" id="" onChange={handleChangeInput}>
                    {day.map((item, index) => (
                      <option value={item} key={index}>
                        {item}
                      </option>
                    ))}
                  </select>
                  <select name="month" id="" onChange={handleChangeInput}>
                    {months.map((item, index) => (
                      <option value={item} key={index}>
                        {item}
                      </option>
                    ))}
                  </select>
                  <select name="year" id="" onChange={handleChangeInput}>
                    {years.map((item, index) => (
                      <option value={item} key={index}>
                        {item}
                      </option>
                    ))}
                  </select>
                </div>
              </div>

              <div className="reg-form">
                <span>Gender</span>
                <div className="reg-form-select">
                  <label>
                    Female
                    <input
                      onChange={handleChangeInput}
                      type="radio"
                      name="gender"
                      value="Female"
                    />
                  </label>
                  <label>
                    Male
                    <input
                      onChange={handleChangeInput}
                      type="radio"
                      name="gender"
                      value="Male"
                    />
                  </label>
                  <label>
                    Custom
                    <input
                      onChange={handleChangeInput}
                      type="radio"
                      name="gender"
                      value="Custom"
                    />
                  </label>
                </div>
              </div>

              <div className="reg-form">
                <p>
                  People who use our service may have uploaded your contact
                  information to Facebook. <a href="#">Learn more.</a>
                </p>
              </div>
              <div className="reg-form">
                <p>
                  By clicking Sign Up, you agree to our <a href="#">Terms</a>,
                  <a href="#">Privacy Policy</a> and
                  <a href="#">Cookies Policy</a>. You may receive SMS
                  notifications from us and can opt out at any time.
                </p>
              </div>

              <div className="reg-form">
                <button type="submit">Sign Up</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RegisterForm;
