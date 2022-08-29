import React, { useEffect } from "react";

import SignUpForm from "../../component/signUpForm/SignUpForm";
import SignInForm from "../../component/SignIn/SignIn";
import "./authentication.scss";

const Authentication = () => {
  return (
    <div className="authentication-container">
      <SignInForm />
      <SignUpForm />
    </div>
  );
};

export default Authentication;
