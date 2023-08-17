import { Routes, Route, useLocation, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";
import QuestionPage from "../../../../component/base/QuestionPage";
import QuizPage from "../../Common/QuizPage";
import QuizMedia from "../../Common/QuizMedia";
import QuizComplete from "../../Common/QuizComplete";
import AnswerQuestion from "./AnswerQuestion";
import AnswerTeacher from "../../Teacher/AnswerTeacher";

const ChoiceQuestion = () => {
  const [questions, setQuestions] = useState(null);
  const navigate = useNavigate();
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          /*`http://localhost:3000/student_study`*/
          `http://101.101.219.109:8080/student/1/study/1`
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
  // console.log(questions.quizEntityList);

  const handleNextClick = (nextStudentNumber, nextStudyNumber) => {
    const nextUrl = `/student/${parseInt(nextStudentNumber)}/study/${parseInt(
      nextStudyNumber
    )}`;
    navigate(nextUrl);
  };
  return (
    <>
      <Routes>
        <Route path="/" element={<QuizPage />} />
        <Route path="complete" element={<QuizComplete />} />
        <Route
          path="answerquestion"
          element={
            <AnswerQuestion
              title={questions.title}
              questionText={questions.question}
              question_number={questions.quizEntityList.length}
              totalPageCount={questions.quizEntityList.length + 1}
            />
          }
        />
        <Route
          path="answerteacher"
          element={
            <AnswerTeacher
              title={questions.title}
              questionText={questions.question}
              question_number={questions.quizEntityList.length}
              totalPageCount={questions.quizEntityList.length + 1}
            />
          }
        />
        <Route
          path="quizmedia"
          element={
            <QuizMedia
              title={questions.title}
              youtube_link={questions.youtube_link}
              totalPageCount={questions.quizEntityList.length + 1}
              studentNumber={questions.studentNumber}
              studyNumber={questions.studyNumber}
            />
          }
        />
        {questions.quizEntityList.map((question, index) => (
          <Route
            key={index}
            // question_number === studyNumber ?path={`/study/${question.studyNumber}`} : null
            //question_number를 찾을 수 없음 ㅠㅠ
            // path={`:question_number`}
            // path={`/study/${question.studyNumber}`}
            element={
              <QuestionPage
                title={questions.title}
                questionText={question.question}
                choices={question.exampleList}
                totalPageCount={questions.quizEntityList.length + 1}
                question_number={question.id}
                writer={question.writer}
                comment={question.comment}
                onNextClick={() =>
                  handleNextClick(
                    question.nextStudentNumber,
                    question.nextStudyNumber
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
export default ChoiceQuestion;
