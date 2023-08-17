import React, { useState } from "react";
import QuizTitle from "../../../component/QuizTitle";
import "../../../style/AnswerQuestion.scss";
import { Container } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { sendChoicesToBackend } from "../../../services/StudentResult";
import { addSubjectiveAnswer } from "../../../services/reducers";

const AnswerQuestion = ({
  title,
  questionText,
  question_number,
  totalPageCount,
  studentNumber = 1,
  studyNumber = 1,
}) => {
	const navigate = useNavigate();
  const [text, setText] = useState('');
  const [currentPage, setCurrentPage] = useState(7);
  const nextStudyNumber = parseInt(studyNumber) + 1;

	// 리덕스 스토어에서 주관식 답변과 객관식 답변 가져오기
	const selectedChoices = useSelector((state) => state.answers);
	const subjectiveAnswer = useSelector((state) => state.subjectiveAnswer);
	const dispatch = useDispatch();

	const handleChange = (event) => {
		setText(event.target.value);
	};
	// 백엔드로 선택한 답변 배열 전송
	const handleSubmit = () => {
		dispatch(addSubjectiveAnswer(text));

		sendChoicesToBackend(studentNumber, studyNumber, selectedChoices, subjectiveAnswer)
		.then(() => {
			console.log("complete");
		})
		.catch((error) => {
			console.error("Error sending choices to backend:", error);
		});
		setCurrentPage(currentPage + 1);
	};

	const handleleftClick = () => {
    const nextStudyNumber = parseInt(question_number) - 1;

  };
	
	const handleRightClick = ( nextStudyNumber ) => {
		const nextUrl = `/student/complete`;
		handleSubmit();
		setCurrentPage(currentPage + 1);
		navigate(nextUrl);
		};

	return (
		<>
			<QuizTitle
				text={title} 
				currentPage={currentPage} 
				totalPageCount={totalPageCount}
			/>
			<div className="answer-container">
				<div className="question">
					<h1>Q{parseInt(question_number)}</h1>
					<Container className="problem-container">
						{questionText}
					</Container>
				</div>
				<textarea className="form"
					value={text}
					onChange={handleChange}
					placeholder="자유롭게 의견을 써주세요."
					rows={8}/>
			</div>
			<div className="btn">
					<img 
						width="80" 
						height="80"
						src="https://img.icons8.com/ios/80/19A05E/circled-left-2.png" 
						alt="left"
						onClick={handleleftClick}
					/>
					<button onClick={handleRightClick(nextStudyNumber)}>제출</button>
			</div>
		</>
	)
}

export default AnswerQuestion;
