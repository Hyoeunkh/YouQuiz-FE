import React from "react";
import { Route, Routes } from "react-router-dom";
import LoginPage from "../pages/Common/LoginPage";
import AgreementPage from "../pages/Common/AgreementPage";
import UserInfoPage from "../pages/Common/UserInfoPage";
import SchoolAuth from "../pages/Common/SchoolAuth";
import QuestionPage from "../pages/Student/study/QuestionPage";
import QuizPage from "../pages/Student/study/QuizPage";
import QuizMedia from "../pages/Common/QuizMedia";
import QuizComplete from "../pages/Common/QuizComplete";
import TeacherStudyPage from "../pages/Teacher/study/TeacherStudyPage";
import TeacherPage from "../pages/Teacher/study/TeacherPage";
import ResultQuizPage from "../pages/Student/my/ResultQuizPage";
import ResultPage from "../pages/Student/my/ResultPage";

export const ResultRoute = () => {
  return (
    <Routes>
      <Route path="/" element={<ResultQuizPage/>} />
      <Route path={`:chap_id/complete`} element={<QuizComplete />} />
      <Route path={`:chap_id/quizmedia`} element={<QuizMedia/>} />
      <Route path={`:chap_id/quiz`} element={<ResultPage />} />
    </Routes>
  );
};

export const QuestionRoute = () => {
  return (
    <Routes>
      <Route path="/" element={<QuizPage/>} />
      <Route path={`:chap_id/complete`} element={<QuizComplete />} />
      <Route path={`:chap_id/quizmedia`} element={<QuizMedia/>} />
      <Route path={`:chap_id/quiz`} element={<QuestionPage />} />
    </Routes>
  );
};
export const TeacherStudyRoute = () => {
  return (
    <Routes>
      <Route path="/" element={<TeacherPage/>} />
      <Route path={`:chap_id/complete`} element={<QuizComplete />} />
      <Route path={`:chap_id/quizmedia`} element={<QuizMedia/>} />
      <Route path={`:chap_id/quiz`} element={<TeacherStudyPage />} />
    </Routes>
  );
};
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