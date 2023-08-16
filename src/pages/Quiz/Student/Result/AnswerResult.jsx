import { Link } from "react-router-dom";
import { Container } from "react-bootstrap";
import React, { useState } from "react";

import QuizTitle from "../../../../component/base/QuizTitle";
import Tablebar from "../../../../component/base/Tablebar";
import "../../../../style/AnswerResult.scss";


const headers = [
	{
		text: '번호',
		value: 'number'
	},
	{
		text: '이름',
		value: 'name'
	},
	{
		text: '답안',
		value: 'answer'
	}
  ];

const items = [
	{
		number: '21번',
		name: '이동건',
		answer: '2013년 서울에서 멋쟁이사자처럼 코스프레를 함'
	},
	{
		answer:'이부분은 표로 안만들고싶은데 아예div로빼야하는건지,.. 일단보류'
	}
]


export default function AnswerResult() {
	const chap_id = "sample_chap_id";
	const student_id = "sample_student_id";
	const userType = "result";
	const score = "sample_score";

	const [currentPage, setCurrentPage] = useState(5);

	const handlePageChange = (page) => {
		setCurrentPage(page);
	};
  return (
	<>
		<QuizTitle text="[1단계] 교내 휴대전화 허용 어디까지?" currentPage={currentPage} totalPageCount={5}  />
		<div className="accordion-container">
			<div className="question">
				<h1>Q4</h1>
				<Container className="problem-container">주관식 문제 학습자가 결과보는페이지</Container>
			</div>
			<Tablebar headers={headers} items={items} />
		</div>
		<div className="btn">
			<Link to={"3"}>
				<img onClick={() => 
					handlePageChange(currentPage - 1)}
					width="80" height="80"
					src="https://img.icons8.com/ios/80/19A05E/circled-left-2.png" alt="circled-left-2"
				/>
			</Link>
			<Link to={`/student/${student_id}/studystatus/${chap_id}/complete`} state={{userType, student_id, score}}>
				<button onClick={() => handlePageChange(currentPage + 1)} >완료</button>
			</Link>
		</div>
	</>
  );
}
