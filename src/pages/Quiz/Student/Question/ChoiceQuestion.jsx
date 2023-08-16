import { BrowserRouter as Router, Route, Switch} from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";
import QuestionPage from "../../../../component/base/QuestionPage"; // ChoiceQuestion 컴포넌트 경로


export const ChoiceQuestion = () => {
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
    <Router>
      <Switch>
        {questions.map((question, index) => (
          <Route key={index} path={`/${index + 1}`}> {/* media페이지를 1번으로?? */}
            <QuestionPage
              questionNumber={index + 1}
              questionText={question.questionText}
              choices={question.choices}
              totalPageCount={5}
            />
          </Route>
        ))}
      </Switch>
    </Router>
  );
};