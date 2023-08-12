import { Link } from "react-router-dom";
import React from "react";
import "../../style/QuizComplete.scss";

const QuizComplate = () => {
	return (
	<>
	{/*채점완료, 결과점수나오는데도 써먹기 */}
		<div className="complate-container">
			<img width="150" height="150" src="https://img.icons8.com/ios/150/19a05e/ok--v1.png" alt="ok--v1"/>
				<h1>제출 완료!</h1>
				<p>제출 후에는 수정이 불가합니다.</p>
			<div className="button">
				<Link to ='/my'><button className="homebtn">홈으로</button></Link>
				<Link to ={`student/${student_id}/study`}><button>학습으로</button></Link>
			</div>
		</div>
	</>
	)
}

export default QuizComplate;
