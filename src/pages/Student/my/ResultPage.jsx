import React, { useState } from "react";
import { useSelector } from "react-redux";
import { useLocation, useNavigate } from "react-router-dom";
import QuizTitle from "../../../component/QuizTitle";
import StudentTable from "../../../component/StudentTable";
import "../../../style/QuestionPage.scss";

const ResultPage = () => {
  const { role, id } = useSelector((state) => state.auth);
  const { data }= useSelector((state)=> state.result);

  const location = useLocation();
  const navigate = useNavigate();

  const { questions, title } = location.state;

  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState(new Array(questions.length).fill(null));

  const getImageSource = (choice) => {
    const isSelected = answers[currentQuestion] === choice;
    const prefix = isSelected ? 'ios-filled' : 'ios';
    return `https://img.icons8.com/${prefix}/80/19A05E/${choice}-circle.png`;
  };

  const handleAnswerChange = (event) => {
    const newAnswers = [...answers];
    newAnswers[currentQuestion] = parseInt(event.target.value, 10); // 숫자로 변환하여 저장
    setAnswers(newAnswers);
  };

  const handlePrevQuestion = () => {
    if (currentQuestion > 0) {
      setCurrentQuestion(currentQuestion - 1);
    } else {
      navigate(`/student/my/${data.no_study_list[0].chap_id}/quizmedia`);
    }
    
  };

  const handleNextQuestion = () => {
    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
    }
   };

  const handleSubmit = async () => {
    navigate(`/student/my/${data.no_study_list[0].chap_id}/complete`);
    
  };
  return (
    <>
      {questions.length > 0 ? (
      <>
        <QuizTitle
          text={title}
          currentPage={currentQuestion}
        />
        <div className="firstq-container">
          <div className="question-conta">
            <h1>Q{currentQuestion+1}</h1>
            <div className="problem-container">
              <h3>{questions[currentQuestion].question}</h3>
              {questions[currentQuestion].exampleList.length > 0 ? (
              <h6 className="comment">
                @{questions[currentQuestion].writer}
                <span>
                  <br />
                  {questions[currentQuestion].comment}
                </span>
              </h6>
              ) : ( null )}
            </div>
          </div>

          <ul className="radio-list">
            {questions[currentQuestion].exampleList.length > 0 ? (
            questions[currentQuestion].exampleList.map((choice, index) => (
              <label key={index} className="radio-label" >
                <input
                type="radio"
                value={index + 1}
                checked={answers[currentQuestion] === index + 1}
                onChange={handleAnswerChange}
              />
                <img src={getImageSource(index + 1)} alt={`${choice}-circle`} />
                {choice}
              </label>
            ))
            ) : (
              <StudentTable />
            )}
          </ul>
        </div>
        

        <div className="btn">
          <img
            width="80"
            height="80"
            src="https://img.icons8.com/ios/80/19A05E/circled-left-2.png"
            alt="left"
            onClick={handlePrevQuestion}
          />
          <img
            width="80"
            height="80"
            src="https://img.icons8.com/ios/80/19A05E/circled-right-2.png"
            alt="right"
            onClick={ currentQuestion === questions.length - 1 ? handleSubmit : handleNextQuestion }
          />
        </div>
      </>
      ) : (
        <p>Loading...</p>
      )}
    </>
  );
};
export default ResultPage;
