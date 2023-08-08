import React, { useState } from "react";
import QuizTitle from "../../component/base/QuizTitle";
import "bootstrap/dist/css/bootstrap.css";
import "../../style/QuizAnswer.scss";
import { Container } from "react-bootstrap";

const ShortAnswer = () => {
	const [text, setText] = useState('');

	const handleChange = (event) => {
		setText(event.target.value);
	};
	return (
	<>
		<div className="answer-container">
			<QuizTitle text="[1단계] 교내 휴대전화 허용 어디까지?" />
			<Container className="problem-container">주관식 문제</Container>
			<textarea className="form"
				value={text}
				onChange={handleChange}
				placeholder="자유롭게 의견을 써주세요."
				rows={8}
				cols={100} />
			<button onClick={ () => console.log(text)}>제출</button>
		</div>
	</>
	)
}

export default ShortAnswer;
