import React from "react";
import { Route, Routes } from "react-router-dom";
import AgreementPage from "./AgreementPage";
import UserInfoPage from "./UserInfoPage";
import ClassPage from "./ClassPage";
import CompletePage from "./CompletePage";

const RegisterPage = () => {
  return (
    <>
		<Routes>
			<Route path="/" element={<AgreementPage />} />
			<Route path="/userinfo" element={<UserInfoPage />} />
			<Route path="/class" element={<ClassPage />} />
			<Route path="/complete" element={<CompletePage />} />
		</Routes>
    </>
  );
};

export default RegisterPage;