import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { addAnswer } from "../services/reducers";
import { Link, useNavigate, useParams } from "react-router-dom";
import QuizTitle from "../component/QuizTitle";
import "../style/QuestionPage.scss";

const QuestionPage = ({
  questions
}) => {
  const { question } = useParams();
  const navigate = useNavigate();
  const selectedChoices = useSelector((state) => state.answers);
  const dispatch = useDispatch();
  const totalcount = [1, 2, 3, 4, 5];
  const [selectedChoice, setSelectedChoice] = useState(null);
  const [currentPage, setCurrentPage] = useState(parseInt(question) + 1);

  const {status, data }= useSelector((state)=> state.chap);
  
  const getImageSource = (choice) =>
    selectedChoice === choice
      ? `https://img.icons8.com/ios-filled/80/19A05E/${choice}-circle.png`
      : `https://img.icons8.com/ios/80/19A05E/${choice}-circle.png`;

  const radioChoices = [1, 2, 3, 4, 5];

  const handleleftClick = () => {
    dispatch(addAnswer(selectedChoices)); // 리덕스 액션 호출
    setCurrentPage(currentPage - 1);
  };

  const handleRightClick = () => {
    const nextStudyNumber = parseInt(question) + 1;
    dispatch(addAnswer(selectedChoices)); // 리덕스 액션 호출
    setCurrentPage(currentPage + 1);
    if ( 4 < nextStudyNumber) {
      navigate( `/study/${data.no_study_list[0].chap_id}/${parseInt(
        nextStudyNumber
      )}`)
      return
    }
  };
  return (
    <>
      <QuizTitle
        text={questions.title}
        currentPage={currentPage}
        totalPageCount={5}
      />
      {totalcount.map((number,index) => (
      <div className="firstq-container">
        <div className="question-conta">
          <h1>Q{parseInt(question)}</h1>
          <div className="problem-container">
            <h3>{questions.quizEntityList[question-1].questionText}</h3>
            <h6 className="comment">
              @{questions.quizEntityList[question-1].writer}
              <span>
                <br />
                {questions.quizEntityList[question-1].comment}
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
              {questions.quizEntityList[question-1].choices[choice - 1]}
            </label>
          ))}
        </ul>
      </div>
      
      ))}

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
