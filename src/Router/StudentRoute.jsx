import React from "react";
import { Route, Routes, useParams } from "react-router-dom";
import QuizMedia from "../pages/Quiz/Common/QuizMedia";
import ResultPage from "../pages/Quiz/ResultPage";
import QuizPage from "../pages/Quiz/Common/QuizPage";
import QuestionPage from "../pages/Quiz/QuestionPage";
import StudyResult from  "../pages/My/StudyResult";


const QuizPageRoute = () => {
    return (
        <Routes>
            <Route path="/" element={<QuizPage />} />{/* 학습 */}
            <Route path=":chap_id" element={<QuizMedia />} />{/* 학습-학습하기버튼 */}
            <Route path=":chap_id/:question_number" element={<QuestionPage />} /> { /*media, Q1,2,3,4, complete*/ }
        </Routes>
    )
}
const ResultPageRoute = () => {
  return (
    <Routes>
      <Route path="/" element={<StudyResult />} /> { /*마이페이지-학습결과 */ }
      <Route path=":chap_id" element={<QuizMedia />} /> { /*마이페이지-학습결과- 결과보기버튼 */ }
      <Route path=":chap_id/:result_number" element={<ResultPage />} /> { /*media, Q1,2,3,4, complete*/ }
    </Routes>
  )
}

const StudentStudyRoute = () => {
    const { chap_id } = useParams();
  return (
    <Routes>
      <Route path="studystatus/*" element={<ResultPageRoute />} /> { /*마이페이지-학습결과 */ }
      <Route path="study/*" element={<QuizPageRoute />}/>
    </Routes>
  );
};


export default StudentStudyRoute;
