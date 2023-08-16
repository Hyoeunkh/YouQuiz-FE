import React, { useState } from "react";
import QuizTitle from "../../../../component/base/QuizTitle";
import "../../../../style/FirstQuestion.scss";
import { Container } from "react-bootstrap";
import { Link, useParams } from "react-router-dom";
import QuestionPage from "../../QuestionPage";

import { useSelector, useDispatch } from "react-redux";
import { addAnswer } from "../../../../services/reducers";

const FirstQuestion = () => {
  const chap_id = "sample_chap_id";
  const { question_number } = useParams();

  // 리덕스
  const selectedChoices = useSelector((state) => state.answers);
  const dispatch = useDispatch();

  const [selectedChoice, setSelectedChoice] = useState(null);
  const [currentPage, setCurrentPage] = useState(2);

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
        <Link to={`media`}>
          <img onClick={() => {
            handlePageChange(currentPage - 1);
          }}
          width="80" height="80"
          src="https://img.icons8.com/ios/80/19A05E/circled-left-2.png" alt="left" />
        </Link>

        <Link to={`2`}> {/*1/2로 가는거 고치기*/}
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