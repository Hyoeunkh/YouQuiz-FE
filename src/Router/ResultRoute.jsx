import { Routes, Route, useNavigate } from "react-router-dom";
import { useEffect, useState, useSelector } from "react";
import axios from "axios";
import ResultQuestionPage from "../component/ResultQuestionPage";
import StudyResult from "../pages/Student/my/StudyResult";
import QuizMedia from "../pages/Common/QuizMedia";
import QuizComplete from "../pages/Common/QuizComplete";
import AnswerResult from "../pages/Student/my/AnswerResult";

const ResultRoute = () => {
  const [questions, setQuestions] = useState(null);
  const [studyNumber, setstudyNumber] = useState(null);
  const navigate = useNavigate();
  //const studentNumber = useSelector((state) => state.auth.studentNumber);
  const student_id = 1;
  
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          /*`http://localhost:3000/student_study`*/
          `http://101.101.219.109:8080/student/${student_id}/studystatus/1`
        );
        setQuestions(response.data);
      } catch (e) {
        console.log(e);
      }
    };
    fetchData();
  }, []);
  if (!questions) {
    return null;
  }
  console.log(questions.quizEntityList);
  const handleNextClick = (nextStudyNumber) => {
    setstudyNumber(nextStudyNumber);
    const nextUrl = `/my/${parseInt(
      nextStudyNumber
    )}`;
    navigate(nextUrl);
  };
  return (
    <>
    <Routes>
      <Route path="/" element={<StudyResult />} />
      <Route path="complete" element={<QuizComplete />} />
      <Route path="answerresult" 
        element={
        <AnswerResult
          title={questions.title}
          questionText={questions.question}
          question_number={questions.quizEntityList.length}
          totalPageCount={questions.quizEntityList.length + 1}
          studyNumber={studyNumber}
        />} 
      />
      <Route path="quizmedia" 
      element={<QuizMedia
        title={questions.title}
        youtube_link={questions.youtube_link}
        totalPageCount={questions.quizEntityList.length + 1}
        studyNumber={studyNumber}
        />}
       />

      {questions.quizEntityList.map((question, index) => (
          <Route
            key={index}
            path={`/my/${studyNumber}`}
            element={
              <ResultQuestionPage
                title={questions.title}
                questionText={question.question}
                choices={question.exampleList}
                totalPageCount={questions.quizEntityList.length + 1}
                question_number={question.id}
                writer={question.writer}
                comment={question.comment}
                onNextClick={() =>
                  handleNextClick(
                    studyNumber+1
                  )
                }
                navigate={navigate}
              />
            }
          />
        ))}
      </Routes>
    </>
  );
};
export default ResultRoute;