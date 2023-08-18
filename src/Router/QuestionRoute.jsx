import { Routes, Route, useNavigate, useLocation } from "react-router-dom";
import { useEffect, useState, useSelector } from "react";
import axios from "axios";
import QuestionPage from "../component/QuestionPage";
import QuizPage from "../pages/Student/study/QuizPage";
import QuizMedia from "../pages/Common/QuizMedia";
import QuizComplete from "../pages/Common/QuizComplete";
import AnswerQuestion from "../pages/Student/study/AnswerQuestion";
import fetchData from "../what/api/quiz";

const QuestionRoute = () => {
  const [questions, setQuestions] = useState(null);
  const [studyNumber, setstudyNumber] = useState(null);
  const navigate = useNavigate();
  const chap_id = 1;
  //const studentNumber = useSelector((state) => state.auth.studentNumber);


  useEffect(() => {
    const Data = async () => {
      try {
        const response = await axios.get(
          //`http://101.101.219.109:8080/student/${id}/study/${chap_id}`
        );
        setQuestions(response.data);
      } catch (e) {
        console.log(e);
      }
    };
    Data();
  }, []);
  if (!questions) {
    return null;
  }

  const lists = fetchData();

  console.log(questions.quizEntityList);
  const handleNextClick = (nextStudyNumber) => {
    setstudyNumber(nextStudyNumber);
    const nextUrl = `/study/${parseInt(
      nextStudyNumber
    )}`;
    navigate(nextUrl);
  };
  return (
    <>
    <Routes>
      <Route path="/" element={<QuizPage lists={lists.no_study_list} />} />
      <Route path= {`${lists.chap_id}/complete`} element={<QuizComplete />} />
      <Route path={`${lists.chap_id}/answerquestion`}
        element={
        <AnswerQuestion
          title={questions.title}
          questionText={questions.question}
          question_number={questions.quizEntityList.length}
          totalPageCount={questions.quizEntityList.length + 1}
          studyNumber={studyNumber}
        />} 
      />
      <Route path={`${lists.chap_id}/quizmedia`} 
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
            path={`/study/${lists.no_study_list.chap_id}/${studyNumber}`}
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
export default QuestionRoute;