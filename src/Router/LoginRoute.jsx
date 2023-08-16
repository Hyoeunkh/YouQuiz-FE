import React from "react";
import { Route, Routes, useParams } from "react-router-dom";
import LoginPage from "../pages/LoginPage";

const LoginRoute = () => {
    const { chap_id } = useParams();
    return (
      <Routes>
        <Route path="/" element={<LoginPage />} />
        <Route path="student" element={<LoginPage />} />
        <Route path="teacher" element={<LoginPage />} />
      </Routes>
    );
  };

export default LoginRoute;
