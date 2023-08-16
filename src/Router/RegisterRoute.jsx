import React from "react";
import { Route, Routes, useParams } from "react-router-dom";
import AgreementPage from "../pages/Register/AgreementPage";
import UserInfoPage from "../pages/Register/UserInfoPage";
import SchoolAuth from "../pages/Register/SchoolAuth";

const RegisterRoute = () => {
    const { chap_id } = useParams();
    return (
      <Routes>
        <Route path="/" element={<AgreementPage />} />
        <Route path="student" element={<UserInfoPage />} />
        <Route path="teacher" element={<UserInfoPage />} />
        <Route path="schoolAuth" element={<SchoolAuth />} />
      </Routes>
    );
  };

export default RegisterRoute;
