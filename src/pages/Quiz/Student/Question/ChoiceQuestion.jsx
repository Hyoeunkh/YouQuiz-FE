import { Routes, Route, useLocation } from "react-router-dom";
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

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          `http://localhost:3000/student_study`
          /*`http://101.101.219.109:8080/student/1/study/1`*/
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

  return (
    <>
    <Routes>
      <Route path="/" element={<QuizPage />} />
      <Route path="complete" element={<QuizComplete />} />
      <Route path="answerquestion" element={<AnswerQuestion title={questions.title} questionText={questions.question}  question_number={questions.quizEntityList.length} totalPageCount={questions.quizEntityList.length+1} />} />
      <Route path="answerteacher" element={<AnswerTeacher title={questions.title} questionText={questions.question}  question_number={questions.quizEntityList.length} totalPageCount={questions.quizEntityList.length+1}/>} />
      <Route path="quizmedia" element={<QuizMedia title={questions.title} youtube_link = {questions.youtube_link} totalPageCount={questions.quizEntityList.length+1} />} />
        {questions.quizEntityList.map((question, index) => (
          <Route key={index} 
            path={`:question_number`} 
            element={ 
            <QuestionPage
              title={questions.title}
              questionText={question.question}
              choices={question.exampleList}
              totalPageCount={questions.quizEntityList.length+1}
              question_number={question.id}
              writer={question.writer}
              comment={question.comment}
            />}
          />
        ))}
    </Routes>
    </>
  );
};
export default ChoiceQuestion;