import React from "react";
import { Route, Routes, useLocation } from "react-router-dom";
import Sidebar from "./component/base/Sidebar";
import HomePage from "./pages/HomePage";
import LoginPage from "./pages/LoginPage";
import RegisterPage from "./pages/Register/RegisterPage";
import MyPage from "./pages/MyPage";
import QuizPage from "./pages/Quiz/QuizPage";
import Header from "./component/base/Header";
import QuizMedia from "./pages/Quiz/QuizMedia";
import ShortAnswer from "./pages/Quiz/ShortAnswer";
import QuizComplate from "./pages/Quiz/QuizComplate";
import FirstQuestion from "./pages/Quiz/FirstQuestion";

const AppWithSidebar = () => {
  const location = useLocation();
  const pathname = location.pathname;

  // 홈 화면 경로일 때 사이드바와 헤더 숨기기
  const hideSidebarAndHeader = pathname === "/";

  const getPageTitle = () => {
    switch (pathname) {
      case "/login":
        return "Login";
      case "/my":
        return "Mypage";
      case "/register":
      case "/register/*":
        return "Sign up";
      case "/quiz":
      case "/quizmedia":
      case "/firstq":
      case "/shortanswer":
      case "/quizcomplate":
        return "Quiz";
      default:
        return "";
    }
  };
  return (
    <>
      {!hideSidebarAndHeader && (
        <>
          <Sidebar />
          <Header page={getPageTitle()} />
        </>
      )}
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/my" element={<MyPage />} />
        <Route path="/register/*" element={<RegisterPage />} />
        <Route path="/quiz" element={<QuizPage />} />
        <Route path="/quizmedia" element={<QuizMedia />} />
        <Route path="/firstq" element={<FirstQuestion />} />
        <Route path="/shortanswer" element={<ShortAnswer />} />
        <Route path="/quizcomplate" element={<QuizComplate />} />
      </Routes>
    </>
  );
};

export default AppWithSidebar;
