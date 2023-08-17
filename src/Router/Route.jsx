import React from "react";
import { Route, Routes, useParams } from "react-router-dom";
import QuizMedia from "../pages/Quiz/Common/QuizMedia";
import ResultPage from "../pages/Quiz/ResultPage";
import QuizPage from "../pages/Quiz/Common/QuizPage";
import ChoiceQuestion from "../pages/Quiz/Student/Question/ChoiceQuestion";
import StudyResult from  "../pages/My/StudyResult";
import QuizComplete from "../pages/Quiz/Common/QuizComplete";
import AnswerQuestion from "../pages/Quiz/Student/Question/AnswerQuestion";
import LoginPage from "../pages/LoginPage";
import AgreementPage from "../pages/Register/AgreementPage";
import UserInfoPage from "../pages/Register/UserInfoPage";
import SchoolAuth from "../pages/Register/SchoolAuth";
import StudyData from "../pages/My/StudyData";
import EvaluationData from "../pages/My/EvaluationData";
import AnswerTeacher from "../pages/Quiz/Teacher/AnswerTeacher";



export const MyPageRoute = () => {
  return (
    <Routes>
      <Route path="studystatus" element={<StudyData />} />
      <Route path="evaluationstatus" element={<EvaluationData />} />
      <Route path="studyresult" element={<StudyResult/>} />
      <Route path="quizmedia" element={<QuizMedia />} />
      <Route path="quizcomplate" element={<QuizComplete />} />
      <Route path=":result_number" element={<ResultPage />} /> 
    </Routes>
  )
}

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