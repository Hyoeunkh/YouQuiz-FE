import { Link } from "react-router-dom";
import React from "react";
import "../../style/QuizComplate.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleCheck } from "@fortawesome/free-regular-svg-icons";


const QuizComplate = () => {
	return (
	<>
		<div className="complate-container">
			<FontAwesomeIcon className="icon" icon={faCircleCheck} style={{color: "#19a05e",}} />
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
