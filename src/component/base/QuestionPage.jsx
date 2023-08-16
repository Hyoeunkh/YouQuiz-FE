import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { addAnswer } from "../../services/reducers";
import { Container } from "react-bootstrap";
import { Link, useParams } from "react-router-dom";
import QuizTitle from "../../component/base/QuizTitle";
import "../../style/FirstQuestion.scss";

const QuestionPage = ({ questionNumber, title, questionText, choices, totalPageCount }) => {
    const { question_number } = useParams();
  
    const selectedChoices = useSelector((state) => state.answers);
    const dispatch = useDispatch();
  
    const [selectedChoice, setSelectedChoice] = useState(null);
    const [currentPage, setCurrentPage] = useState( questionNumber + 1);
  
    const handlePageChange = (page) => {
      dispatch(addAnswer(selectedChoices)); // 리덕스 액션 호출
      setCurrentPage(page);
    };
  
    const getImageSource = (choice) => 
      selectedChoice === choice ? `https://img.icons8.com/ios-filled/80/19A05E/${choice}-circle.png`
      : `https://img.icons8.com/ios/80/19A05E/${choice}-circle.png`;
  
   
    const radioChoices = [1, 2, 3, 4, 5];
  
    return (
      <>
        <QuizTitle text={title} currentPage={currentPage} totalPageCount={5} />
        <div className="firstq-container">
          <div className="question">
            <h1>Q{questionNumber}</h1>
            <Container className="problem-container">{questionText}</Container>
          </div>
  
          <ul className="radio-list">
            {radioChoices.map((choice, index) => (
              <label key={index} className="radio-label" htmlFor={`${choice}`}>
                <input
                type="radio"
                id={`${choice}`}
                name="choice"
                value={choice}
                checked={selectedChoice === choice}
                onChange={() => setSelectedChoice(selectedChoice === choice ? null : choice) }
              />
              <img
                src={getImageSource(choice)}
                alt={`${choice}-circle`}
              />
              {choices[choice]}
            </label>
          ))}
        </ul>
      </div>
  
      <div className="btn">
        {questionNumber > 1 && (
          <Link to={`${questionNumber - 1}`}>
            <img
              onClick={() => {
                handlePageChange(currentPage - 1);
              }}
              width="80"
              height="80"
              src="https://img.icons8.com/ios/80/19A05E/circled-left-2.png"
              alt="left"
            />
          </Link>
        )}

        {questionNumber < totalPageCount && (
          <Link to={`${questionNumber + 1}`}>
            <img
              onClick={() => {
                handlePageChange(currentPage + 1);
              }}
              width="80"
              height="80"
              src="https://img.icons8.com/ios/80/19A05E/circled-right-2.png"
              alt="right"
            />
          </Link>
        )}
      </div>
    </>
  );
};
export default QuestionPage;