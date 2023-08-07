import React from 'react';
import { Route, Routes, useLocation } from 'react-router-dom';
import Sidebar from './component/base/Sidebar';
import HomePage from './pages/HomePage';
import LoginPage from './pages/LoginPage'; 
import RegisterPage from './pages/Register/RegisterPage'; 
import MyPage from './pages/MyPage';
import QuizPage from './pages/QuizPage'; 
import Header from './component/base/Header';


const AppWithSidebar = () => {
  const location = useLocation();
  const pathname = location.pathname;

  // 홈 화면 경로일 때 사이드바와 헤더 숨기기  
  const hideSidebarAndHeader = pathname === '/';


  const getPageTitle = () => {
    switch (pathname) {
      case '/login':
        return 'Login';
      case '/my':
        return 'Mypage';
      case '/register':  
      case '/register/*': 
        return 'Sign up';
      case '/quiz':
        return 'Quiz';
      default:
        return '';
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
      </Routes>
    </>
  );
};

export default AppWithSidebar;