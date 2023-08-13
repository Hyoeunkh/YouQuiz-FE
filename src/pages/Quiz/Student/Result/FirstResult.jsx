import React, { useState } from "react";
import QuizTitle from "../../../../component/base/QuizTitle";
import "../../../../style/FirstQuestion.scss";
import { Container } from "react-bootstrap";
import { Link } from "react-router-dom";

const FirstQuestion = () => {
  const chap_id = "sample_chap_id";

  const [selectedChoice, setSelectedChoice] = useState(null);
  const [currentPage, setCurrentPage] = useState(2);

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  const handleChoiceClick = (choice) => {
    setSelectedChoice(selectedChoice === choice ? null : choice);
  };
  const getImageSource = (choice) => 
    selectedChoice === choice? `https://img.icons8.com/ios-filled/80/19A05E/${choice}-circle.png`
    : `https://img.icons8.com/ios/80/19A05E/${choice}-circle.png`;

 
  const radioChoices = [1, 2, 3, 4, 5];

  return (
    <>
      <QuizTitle text="[1단계] 교내 휴대전화 허용 어디까지?" currentPage={currentPage} totalPageCount={5} />
      <div className="firstq-container">
        <div className="question">
          <h1>Q1</h1>
          <Container className="problem-container">첫번째 문제</Container>
        </div>
        <ul className="radio-list">
          {radioChoices.map((choice) => (
            <label key={choice} className="radio-label" htmlFor={`${choice}`}>
              <div
                className={`radio-option ${selectedChoice === `${choice}` ? "selected" : ""}`}
                onClick={() => handleChoiceClick(`${choice}`)}
              >
                <input
                  type="radio"
                  id={`${choice}`}
                  name="choice"
                  value={choice}
                  checked={selectedChoice === `${choice}`}
                  onChange={() => {}}
                />
                <img
                  key={selectedChoice}
                  src={getImageSource(`${choice}`)}
                  alt={`{choice}-circle`}
                />
                휘영님감사해요..
              </div>
            </label>
          ))}
        </ul>
      </div>
      <div className="btn">
        <Link to={`/study/${chap_id}/media`}>
          <img onClick={() => handlePageChange(currentPage - 1)} width="80" height="80" src="https://img.icons8.com/ios/80/19A05E/circled-left-2.png" alt="circled-left-2" />
        </Link>
        <Link to={`/study/${chap_id}/4`}>
          <img onClick={() => handlePageChange(currentPage + 1)} width="80" height="80" src="https://img.icons8.com/ios/80/19A05E/circled-right-2.png" alt="circled-left-2" />
        </Link>
      </div>

    </>
  );
};

export default FirstQuestion;