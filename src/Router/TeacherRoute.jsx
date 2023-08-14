import React from "react";
import { Route, Routes, useParams } from "react-router-dom";
import QuizPage from "../pages/Quiz/Common/QuizPage";
import QuestionPage from "../pages/Quiz/QuestionPage";
import QuizMedia from "../pages/Quiz/Common/QuizMedia";
import StudyData from "../pages/My/StudyData";
import EvaluationData from "../pages/My/EvaluationData";

const QuizPageRoute = () => {
    return (
        <Routes>
            <Route path="/" element={<QuizPage />} />
            <Route path=":chap_id" element={<QuizMedia />} />{ /*학습-학습하기버튼*/ }
            <Route path=":chap_id/:question_number" element={<QuestionPage />} />{ /*media, Q1,2,3,4, complete*/ }
        </Routes>
    )
}
const TeacherStudyRoute = () => {
    const { chap_id } = useParams();
    return (
      <Routes>
        <Route path="studystatus" element={<StudyData/>} />{ /*마이페이지-학습관리*/ }
        <Route path="evaluationstatus" element={<EvaluationData />} /> { /*마이페이지-채점관리*/ }
        <Route path="study/*" element={<QuizPageRoute />} /> { /*학습*/ }
      </Routes>
    );
  };

export default TeacherStudyRoute;
