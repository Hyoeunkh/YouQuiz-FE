import React, { useState } from "react";
import AuthForm from "./AuthForm";

const LoginForm = ({ history }) => {
  const [error, setError] = useState(null);

  return (
    <AuthForm
      type="login"
      error={error}
    />
  );
};

export default LoginForm;
