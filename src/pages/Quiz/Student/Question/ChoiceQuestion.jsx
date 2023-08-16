import { Routes, Route} from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";
import QuestionPage from "../../../../component/base/QuestionPage";


const ChoiceQuestion = () => {
    const [questions, setQuestions ] = useState(null);
  
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          `http://localhost:3000/`
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

  return (
    <Routes>
        {questions.map((question, index) => (
          <Route key={index} path={`/${index + 1}`}>
            <QuestionPage
              questionNumber={index + 1}
              questionText={question.questionText}
              choices={question.choices}
              totalPageCount={5}
            />
          </Route>
        ))}
    </Routes>
  );
};
export default ChoiceQuestion;