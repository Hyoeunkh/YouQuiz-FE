import React, { useState } from "react";
import QuizTitle from "../../component/base/QuizTitle";
import "../../style/FirstQuestion.scss";
import { Container } from "react-bootstrap";
import { Link } from "react-router-dom";
import { sendChoicesToBackend } from "../../services/StudentResult";

  
const FirstQuestion = () => {
  const [selectedChoice, setSelectedChoice] = useState(null);
  const [currentPage, setCurrentPage] = useState(2);

  const handlePageChange = (page) => {
    const studentId = "sample_student_id"; // 실제로 사용할 학생 ID
    const chapId = "sample_chap_id"; // 실제로 사용할 챕터 ID

    sendChoicesToBackend(studentId, chapId, selectedChoice)
      .then(() => {
        setCurrentPage(page);
      })
      .catch((error) => {
        console.error("Error sending choices to backend:", error);
      });
  };

  const getImageSource = (choice) => 
    selectedChoice === choice ? `https://img.icons8.com/ios-filled/80/19A05E/${choice}-circle.png`
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
                  alt={`{choice}-circle`}
                />
                휘영님감사해요..
            </label>
          ))}
        </ul>
      </div>

      <div className="btn">
        <Link to="/quizmedia">
          <img onClick={() => {
            handlePageChange(currentPage - 1);
          }}
          width="80" height="80"
          src="https://img.icons8.com/ios/80/19A05E/circled-left-2.png" alt="left" />
        </Link>

        <Link to="/answerq">
        <img onClick={() => {
            handlePageChange(currentPage + 1);
          }}
          width="80" height="80"
          src="https://img.icons8.com/ios/80/19A05E/circled-right-2.png" alt="right" />
        </Link>
      </div>

    </>
  );
};

export default FirstQuestion;