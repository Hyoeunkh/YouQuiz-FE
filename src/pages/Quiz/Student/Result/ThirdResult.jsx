import React, { useState, useEffect } from "react";
import QuizTitle from "../../../../component/base/QuizTitle";
import "../../../../style/QuestionPage.scss";
import { Container } from "react-bootstrap";
import { Link } from "react-router-dom";

const SecondResult = ( prop ) => {
  const chap_id = "sample_chap_id";

  const [selectedChoice, setSelectedChoice] = useState(null);
  const [currentPage, setCurrentPage] = useState(4);

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  const getImageSource = (choice) => 
    selectedChoice === choice? `https://img.icons8.com/ios-filled/80/EB3223/${choice}-circle.png`
    : `https://img.icons8.com/ios/80/19A05E/${choice}-circle.png`;

 
  const radioChoices = [1, 2, 3, 4, 5];

  useEffect(() => {
    // 여기서 백엔드에서 받아온 answer_list 값을 설정
    const backendAnswerList = [1, 5, 3]; //sample값
    //setSelectedChoice(prop.answer_list[2]); //원래코드?
    setSelectedChoice(backendAnswerList[2]);
  }, []);

  return (
    <>
      <QuizTitle text="[1단계] 교내 휴대전화 허용 어디까지?" currentPage={currentPage} totalPageCount={5} />
      <div className="firstq-container">
        <div className="question">
          <h1>Q3</h1>
          <Container className="problem-container">세번째문제</Container>
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
                />
                <img
                  src={getImageSource(choice)}
                  alt={`{choice}-circle`}
                />
               1~5선지
                
            </label>
          ))}
        </ul>
      </div>
      <div className="btn">
        <Link to={`2`}>
          <img onClick={() => handlePageChange(currentPage - 1)} width="80" height="80" src="https://img.icons8.com/ios/80/19A05E/circled-left-2.png" alt="circled-left-2" />
        </Link>
        <Link to={`4`}>
          <img onClick={() => handlePageChange(currentPage + 1)} width="80" height="80" src="https://img.icons8.com/ios/80/19A05E/circled-right-2.png" alt="circled-left-2" />
        </Link>
      </div>

    </>
  );
};

export default SecondResult;