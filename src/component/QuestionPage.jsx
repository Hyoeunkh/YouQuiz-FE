import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { addAnswer } from "../services/reducers";
import { Link, useNavigate, useParams } from "react-router-dom";
import QuizTitle from "../component/QuizTitle";
import "../style/QuestionPage.scss";

const QuestionPage = ({
  title,
  questionText,
  choices,
  totalPageCount,
  writer,
  comment,
  onNextClick,
  navigate,
}) => {
  const { question_number } = useParams();
  const selectedChoices = useSelector((state) => state.answers);
  const dispatch = useDispatch();

  const [selectedChoice, setSelectedChoice] = useState(null);
  const [currentPage, setCurrentPage] = useState(parseInt(question_number) + 1);

  console.log(question_number);
  const getImageSource = (choice) =>
    selectedChoice === choice
      ? `https://img.icons8.com/ios-filled/80/19A05E/${choice}-circle.png`
      : `https://img.icons8.com/ios/80/19A05E/${choice}-circle.png`;

  const radioChoices = [1, 2, 3, 4, 5];

  const handleleftClick = () => {
    const nextStudyNumber = parseInt(question_number) - 1;
    dispatch(addAnswer(selectedChoices)); // 리덕스 액션 호출
    setCurrentPage(currentPage - 1);
    onNextClick(nextStudyNumber);
    
  };
  const handleRightClick = () => {
    const nextStudyNumber = parseInt(question_number) + 1;
    dispatch(addAnswer(selectedChoices)); // 리덕스 액션 호출
    setCurrentPage(currentPage + 1);
    onNextClick(nextStudyNumber);
  };
  return (
    <>
      <QuizTitle
        text={title}
        currentPage={currentPage}
        totalPageCount={totalPageCount}
      />
      <div className="firstq-container">
        <div className="question-conta">
          <h1>Q{parseInt(question_number)}</h1>
          <div className="problem-container">
            <h3>{questionText}</h3>
            <h6 className="comment">
              @{writer}
              <span>
                <br />
                {comment}
              </span>
            </h6>
          </div>
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
                onChange={() =>
                  setSelectedChoice(selectedChoice === choice ? null : choice)
                }
              />
              <img src={getImageSource(choice)} alt={`${choice}-circle`} />
              {choices[choice - 1]}
            </label>
          ))}
        </ul>
      </div>

      <div className="btn">
        <img
          width="80"
          height="80"
          src="https://img.icons8.com/ios/80/19A05E/circled-left-2.png"
          alt="left"
          onClick={handleleftClick}
        />
        <img
          width="80"
          height="80"
          src="https://img.icons8.com/ios/80/19A05E/circled-right-2.png"
          alt="right"
          onClick={handleRightClick}
        />
      </div>
    </>
  );
};
export default QuestionPage;
