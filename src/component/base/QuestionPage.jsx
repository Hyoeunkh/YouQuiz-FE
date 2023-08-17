import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { addAnswer } from "../../services/reducers";
import { Link, useParams } from "react-router-dom";
import QuizTitle from "../../component/base/QuizTitle";
import "../../style/QuestionPage.scss";

const QuestionPage = ({ title, questionText, choices, totalPageCount,writer, comment }) => {

    const { question_number } = useParams();
    const selectedChoices = useSelector((state) => state.answers);
    const dispatch = useDispatch();

    const [selectedChoice, setSelectedChoice] = useState(null);
    const [currentPage, setCurrentPage] = useState(parseInt(question_number)+1);
  
    const handlePageChange = (page) => {
      dispatch(addAnswer(selectedChoices)); // 리덕스 액션 호출
      setCurrentPage(page);
    };
    console.log(question_number);
    const getImageSource = (choice) => 
      selectedChoice === choice ? `https://img.icons8.com/ios-filled/80/19A05E/${choice}-circle.png`
      : `https://img.icons8.com/ios/80/19A05E/${choice}-circle.png`;
  
   
    const radioChoices = [1, 2, 3, 4, 5];
  
    return (
      <>
        <QuizTitle text={title} currentPage={currentPage} totalPageCount={totalPageCount} />
        <div className="firstq-container">
          <div className="question-conta">
            <h1>Q{parseInt(question_number)}</h1>
            <div className="problem-container">
              <h3>{questionText}</h3>
              <h6 className="comment">
                @{writer}<span><br/>{comment}</span>
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
                onChange={() => setSelectedChoice(selectedChoice === choice ? null : choice) }
              />
              <img
                src={getImageSource(choice)}
                alt={`${choice}-circle`}
              />
              {choices[choice - 1]}
            </label>
          ))}
        </ul>
      </div>
  
      <div className="btn">
          <Link to={parseInt(question_number) > 1 ? `/study/${parseInt(question_number) - 1}` : `/study/quizmedia`}>
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
        <Link to={parseInt(question_number) < totalPageCount-2 ? `/study/${parseInt(question_number) + 1}` : `/study/answerquestion` } state={currentPage}>
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
      </div>
    </>
  );
};
export default QuestionPage;