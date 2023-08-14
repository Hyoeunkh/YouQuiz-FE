import React, { useState } from "react";
import QuizTitle from "../../../../component/base/QuizTitle";
import "../../../../style/AnswerQuestion.scss";
import { Container } from "react-bootstrap";
import { Link } from "react-router-dom";
import { sendChoicesToBackend } from "../../../../services/StudentResult";

const AnswerQuestion = () => {
	const chap_id = "sample_chap_id";
	const student_id = "sample_student_id";
	
	const [text, setText] = useState('');
	const [currentPage, setCurrentPage] = useState(3);

	const handlePageChange = (page) => {
		sendSubjectiveAnswerToBackend(text); // 주관식 답변을 백엔드로 전송
		setCurrentPage(page);
	};

	const handleChange = (event) => {
		setText(event.target.value);
	};
	
	const sendSubjectiveAnswerToBackend = (answer) => {
		const studentId = "your_student_id"; // 실제로 사용할 학생 ID
		const chapId = "your_chap_id"; // 실제로 사용할 챕터 ID

		sendChoicesToBackend(studentId, chapId, [], answer)
			.then(() => {
				console.log("complete");
			})
			.catch((error) => {
				console.error("Error sending choices to backend:", error);
			});
	};
	
	return (
	<>
		<QuizTitle text="[1단계] 교내 휴대전화 허용 어디까지?" currentPage={currentPage} totalPageCount={5} />
		<div className="answer-container">
			<div className="question">
				<h1>Q4</h1>
				<Container className="problem-container">주관식 문제</Container>
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
			<Link to={`study/${chap_id}/complete?userType=student&student_id=${student_id}`}>
			<button onClick={() => handlePageChange(currentPage + 1)}>제출</button>
				{/*클릭할때 왜 검정 테두리가 생기는지*/}
			</Link>
		</div>
	</>
	)
}

export default AnswerQuestion;
