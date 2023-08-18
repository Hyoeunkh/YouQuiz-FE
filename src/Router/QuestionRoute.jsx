import { Routes, Route, useNavigate, useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";
import QuestionPage from "../component/QuestionPage";
import QuizPage from "../pages/Student/study/QuizPage";
import QuizMedia from "../pages/Common/QuizMedia";
import QuizComplete from "../pages/Common/QuizComplete";
import AnswerQuestion from "../pages/Student/study/AnswerQuestion";
import { ChapFetchThunk } from "../store/chapSlice";

const QuestionRoute = () => {
  const [questions, setQuestions] = useState(null);
  const [studyNumber, setstudyNumber] = useState(1);
  const navigate = useNavigate();
  const { role, id} = useSelector((state) => state.auth);
  const {status, data }= useSelector((state)=> state.chap);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(ChapFetchThunk());
  }, []);

  useEffect(() => {
    if(status === "success"){
    const Data = async () => {
      try {
        const response = await axios.get(
          `http://101.101.219.109:8080/${role}/${id}/study/${data.no_study_list[0].chap_id}`
        );
        setQuestions(response.data);

      } catch (e) {
        console.log(e);
      }
    };
    Data();
  }
  }, [status]);
  if (!questions) {
    return null;
  }

  console.log(questions.quizEntityList);
  const handleNextClick = (nextStudyNumber) => {
    setstudyNumber(nextStudyNumber);
    const nextUrl = `/study/${data.no_study_list[0].chap_id}/${parseInt(
      nextStudyNumber
    )}`;
    navigate(nextUrl);
  };
  return (
    <>
    <Routes>
      <Route path="/" element={<QuizPage/>} />
      <Route path= {`:chap_id/complete`} element={<QuizComplete />} />
      <Route path={`:chap_id/answerquestion`}
        element={
        <AnswerQuestion
          title={questions.title}
          questionText={questions.question}
          question_number={questions.quizEntityList.length}
          totalPageCount={questions.quizEntityList.length + 1}
          studyNumber={studyNumber}
        />} 
      />
      <Route path={`:chap_id/quizmedia`} 
      element={<QuizMedia
        title={questions.title}
        youtube_link={questions.youtube_link}
        totalPageCount={questions.quizEntityList.length + 1}
        studyNumber={studyNumber}
        />}
       />
          <Route
            path={`:chap_id/:question`}
            element={
              <QuestionPage
                questions={questions}
              />
            }
          />
      </Routes>
    </>
  );
};
export default QuestionRoute;