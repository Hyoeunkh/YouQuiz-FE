import React, { useState } from "react";
import { Route, Routes, useLocation } from "react-router-dom";
import Sidebar from "./component/Sidebar";
import HomePage from "./pages/Common/HomePage";
import Header from "./component/Header";
import { RegisterRoute, LoginRoute } from "./Router/Route";
import QuestionRoute from "./Router/QuestionRoute";
import TeacherStudyRoute from "./Router/TeacherStudyRoute";
import ResultRoute from "./Router/ResultRoute";
import EvaluationData from "./pages/Teacher/EvaluationData";
import StudyData from "./pages/Teacher/StudyData";
import QuizPage from "./pages/Student/study/QuizPage";

function NotFoundPage() {
  return <div>Page not found.</div>;
}
const App = () => {
  const location = useLocation();
  const pathname = location.pathname;
  
  // 홈 화면 경로일 때 사이드바와 헤더 숨기기
  const hideSidebarAndHeader = pathname === "/";

  //일단급한대fh state로 함
  const [role, setrole] = useState("student");

  const getPageTitle = () => {
    if (pathname.includes("/login")) {
      return "Login";
    }
    if (
      pathname.includes("/my")
    ) {
      return "My page";
    }
    if (pathname.includes("/register")) {
      return "Sign up";
    }
    if (pathname.includes("/study")) {
      return "Quiz";
    }
  }
  
  return (
    <>
      {!hideSidebarAndHeader && (
        <>
          <Sidebar role={role} />
          <Header page={getPageTitle()} />
        </>
      )}
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/login/*" element={<LoginRoute />} />
        <Route path="/register/*" element={<RegisterRoute />} />
        <Route path="/my/*" elementt={<ResultRoute />} />
        <Route path="/study/*" element={<QuestionRoute  /> } />
        <Route path="/teacher/study/*" element={<TeacherStudyRoute />} />
        <Route path="/teacher/my/studystatus" element={<StudyData />} />
        <Route path="/teacher/my/evaluationstatus" element={<EvaluationData />} />
        <Route path="/*" element={<NotFoundPage />} />
      </Routes>
      
    </>
  );
};

export default App;
