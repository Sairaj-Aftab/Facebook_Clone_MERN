import React, { useState } from "react";
import RegisterForm from "../../components/RegisterForm/RegisterForm";

const Register = () => {
  const [showRegister, setShowRegister] = useState(false);

  return (
    <div>
      <RegisterForm setShowRegister={setShowRegister} />
    </div>
  );
};

export default Register;
