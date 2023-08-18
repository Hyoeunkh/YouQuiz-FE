import React from "react";
import { Route, Routes } from "react-router-dom";
import LoginPage from "../pages/Common/LoginPage";
import AgreementPage from "../pages/Common/AgreementPage";
import UserInfoPage from "../pages/Common/UserInfoPage";
import SchoolAuth from "../pages/Common/SchoolAuth";



export const RegisterRoute = () => {
  return (
    <Routes>
      <Route path="/" element={<AgreementPage />} />
      <Route path="student" element={<UserInfoPage />} />
      <Route path="teacher" element={<UserInfoPage />} />
      <Route path="schoolAuth" element={<SchoolAuth />} />
    </Routes>
  );
};

export const LoginRoute = () => {
  return (
    <Routes>
      <Route path="/" element={<LoginPage />} />
      <Route path="student" element={<LoginPage />} />
      <Route path="teacher" element={<LoginPage />} />
    </Routes>
  );
};