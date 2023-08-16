import React from "react";
import { Route, Routes, useLocation, useParams } from "react-router-dom";
import Sidebar from "./component/base/Sidebar";
import HomePage from "./pages/HomePage";
import Header from "./component/base/Header";
import { QuizPageRoute, MyPageRoute, RegisterRoute, LoginRoute } from "./Router/Route";


function NotFoundPage() {
  return <div>Page not found.</div>;
}


const App = () => {
  const location = useLocation();
  const pathname = location.pathname;
  // 홈 화면 경로일 때 사이드바와 헤더 숨기기
  const hideSidebarAndHeader = pathname === "/";

  const getPageTitle = () => {
    if (pathname.includes("/login")) {
      return "Login";
    }
    if (
      pathname.includes("/evaluationstatus") || 
      pathname.includes("/studystatus")
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
          <Sidebar />
          <Header page={getPageTitle()} />
        </>
      )}

      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/login/*" element={<LoginRoute />} />
        <Route path="/register/*" element={<RegisterRoute />} />
        <Route path="/study/*" element={<QuizPageRoute />} />
        <Route path="/my/*" element={<MyPageRoute />} />
        <Route path="/*" element={<NotFoundPage />} />
      </Routes>
    </>
  );
};

export default App;
