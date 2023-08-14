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
            <Route path="/" element={<QuizPage />} />
            <Route path=":chap_id" element={<QuizMedia />} />
            <Route path=":chap_id/:question_number" element={<QuestionPage />} />
        </Routes>
    )
}
const StudentStudyRoute = () => {
    const { chap_id } = useParams();
  return (
    <Routes>
      <Route path="/" element={<StudyResult />} />
      <Route path=":chap_id/*" element={<QuizMedia />} />
      <Route path=":chap_id/:result_number" element={<ResultPage />} />
      <Route path="study/*" element={<QuizPageRoute />}/>
    </Routes>
  );
};


export default StudentStudyRoute;
