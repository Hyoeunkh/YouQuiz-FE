import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import AuthForm from "./AuthForm";
import { useNavigate } from "react-router-dom";

const LoginForm = ({ history }) => {
  const [error, setError] = useState(null);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  return (
    <AuthForm
      type="login"
      error={error}
    />
  );
};

export default LoginForm;
