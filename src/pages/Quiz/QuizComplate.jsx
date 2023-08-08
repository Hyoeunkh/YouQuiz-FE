import { Link } from "react-router-dom";
import React from "react";
import "../../style/QuizComplate.scss";

const QuizComplate = () => {
	return (
	<>
		<div className="complate-container">
			<img width="150" height="150" src="https://img.icons8.com/ios/150/19a05e/ok--v1.png" alt="ok--v1"/>
				<h1>제출 완료!</h1>
				<p>채점이 완료되면 알려드려요.</p>
			<div className="button">
				<Link to ='/my'><button className="homebtn">홈으로</button></Link>
				<Link to ='/quiz'><button>학습으로</button></Link>
			</div>
		</div>
	</>
	)
}

export default QuizComplate;
