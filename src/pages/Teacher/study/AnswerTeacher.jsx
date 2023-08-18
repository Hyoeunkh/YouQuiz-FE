import React, {useState} from "react";
import { Link } from "react-router-dom";
import { Container } from "react-bootstrap";

import QuizTitle from "../../../component/QuizTitle";
import TeacherToggle from "../../../component/TeacherToggle";
import "../../../style/AnswerResult.scss";

export default function AnswerTeacher( { title, questionText, question_number,totalPageCount } ) {
 /*
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
    },
    {
      text: '21/27',
      value: 'complete'
    }
  ];

  const items = [
    {
      number: '21번',
      name: '이동건',
      answer: '2013년 서울에서 멋쟁이사자처럼 코스프레를 함',
      complete: (
        <button className="toggle-btn">
          답글
        </button>
      ),
    },
    {
      number: '11번',
      name: '편수빈',
      answer: '2013년 서울에서 멋쟁이사자처럼 코스프레를 함',
      complete: (
        <button className="toggle-btn">
          답글
        </button>
      ),
    }
  ];
  */

  const chap_id = "10";
  const teacher_id = "10";
  const userType = "teacher";
  const [currentPage, setCurrentPage] = useState(7);

	const handlePageChange = (page) => {
		setCurrentPage(page);
	};

  return (
	<>
		<QuizTitle text={title} currentPage={currentPage} totalPageCount={totalPageCount} />
		<div className="accordion-container">
			<div className="question">
				<h1>Q{parseInt(question_number)}</h1>
				<Container className="problem-container">{questionText}</Container>
			</div>
			<TeacherToggle />
		</div>
		<div className="btn">
			<Link to={`-1`}>
      <img onClick={() => 
					handlePageChange(currentPage - 1)}
					width="80" height="80"
					src="https://img.icons8.com/ios/80/19A05E/circled-left-2.png" alt="circled-left-2"
				/>
			</Link>
			<Link to={`/study/complete`} state={{userType, teacher_id}}>
        <button onClick={() => handlePageChange(currentPage + 1)} >완료</button>
			</Link>
		</div>
	</>
  );
}
