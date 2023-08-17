import React, { useState } from "react";
import QuizTitle from "../../../../component/base/QuizTitle";
import "../../../../style/AnswerQuestion.scss";
import { Container } from "react-bootstrap";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { sendChoicesToBackend } from "../../../../services/StudentResult";
import { addSubjectiveAnswer } from "../../../../services/reducers";

const AnswerQuestion = ( { title, questionText, question_number,totalPageCount } ) => {
	const chap_id = "10";
	const student_id = "10";
	const userType = "student";

	const [text, setText] = useState('');
	const [currentPage, setCurrentPage] = useState(7);

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

    	sendChoicesToBackend(student_id, chap_id, selectedChoices, subjectiveAnswer)
		.then(() => {
			console.log("complete");
		})
		.catch((error) => {
			console.error("Error sending choices to backend:", error);
		});
		setCurrentPage(currentPage + 1);
	};

	const handlePageChange = (page) => { 
		setCurrentPage(page);
	};
	
	
	return (
	<>
		<QuizTitle text={title} currentPage={currentPage} totalPageCount={totalPageCount}/>
		<div className="answer-container">
			<div className="question">
				<h1>Q{parseInt(question_number)}</h1>
				<Container className="problem-container">{questionText}</Container>
			</div>
			<textarea className="form"
				value={text}
				onChange={handleChange}
				placeholder="자유롭게 의견을 써주세요."
				rows={8}/>
		</div>
		<div className="btn">
			<Link to={-1}>
				<img onClick={() => 
					handlePageChange(currentPage - 1)} 
					width="80" height="80"
					src="https://img.icons8.com/ios/80/19A05E/circled-left-2.png" alt="left"/>
			</Link>
			<Link to={`/study/complete`} state={{userType, student_id}}>
			<button onClick={handleSubmit}>제출</button>
			</Link>
		</div>
	</>
	)
}

export default AnswerQuestion;
