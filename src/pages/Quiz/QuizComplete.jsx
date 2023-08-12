import { Link } from "react-router-dom";
import React from "react";
import "../../style/QuizComplete.scss";

const QuizComplate = ( { userType, student_id, teacher_id, score } ) => {
	//userType은 student, teacher, result로 지정
	const h1Text = userType === "student"
	? "제출 완료!"
	: userType === "teacher"
	? "패점 완료!"
	: `${score}점`;

const pText =
  userType === "student"
	? "제출 후에는 수정이 불가합니다."
	: userType === "teacher"
	? "채점 완료 확인되었습니다."
	: "수고하셨습니다";

	return (
	<>
		<div className="complate-container">
			<img
				width="150" height="150"
				src="https://img.icons8.com/ios/150/19a05e/ok--v1.png"
				alt="ok--v1"
			/>
				<h1>{h1Text}</h1>
				<p>{pText}</p>
			<div className="button">
				<Link to ='/my'><button className="homebtn">홈으로</button></Link>
				<Link to ={`/${userType}/${(userType === 'student' || userType === 'result') ? student_id : teacher_id}/study`}><button>학습으로</button></Link>
				{/*teacher/${teacher_id}/study*/}
				{/*student/${student_id}/study*/}
			</div>
		</div>
	</>
	)
}

export default QuizComplate;
