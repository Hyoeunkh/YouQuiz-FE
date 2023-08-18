import { Routes, Route, useNavigate } from "react-router-dom";
import { useEffect, useState, useSelector } from "react";
import axios from "axios";
import QuestionPage from "../component/QuestionPage";
import QuizMedia from "../pages/Common/QuizMedia";
import QuizComplete from "../pages/Common/QuizComplete";
import AnswerTeacher from "../pages/Teacher/AnswerTeacher";
import TeacherStudyList from "../pages/Teacher/TeacherStudyList";

const TeacherStudyRoute = () => {
  const [questions, setQuestions] = useState(null);
  const [studyNumber, setstudyNumber] = useState(null);
  const navigate = useNavigate();
  //const teacherNumber = useSelector((state) => state.auth.teacherNumber);
  const teacher_id = 1;
  
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          /*`http://localhost:3000/student_study`*/
          `http://101.101.219.109:8080/teacher/${teacher_id}/study/1/1`
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
    const nextUrl = `/study/${parseInt(
      nextStudyNumber
    )}`;
    navigate(nextUrl);
  };
  return (
    <>
    <Routes>
      <Route path="/" element={<TeacherStudyList />} />
      <Route path="complete" element={<QuizComplete />} />
      <Route path="answerquestion" 
        element={
        <AnswerTeacher
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
            path={`/study/${studyNumber}`}
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
export default TeacherStudyRoute;