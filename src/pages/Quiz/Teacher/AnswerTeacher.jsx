import React, {useState} from "react";
import { Link } from "react-router-dom";
import { Container } from "react-bootstrap";

import QuizTitle from "../../../component/base/QuizTitle";
import TableToggle from "../../../component/base/TableToggle";
import "../../../style/AnswerResult.scss";

export default function AnswerTeacher() {
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
				<Container className="problem-container">주관식 문제 교육자가 답글다는페이지. 학습자결과보는페이지랑 겹치는데 페이지 재활용은못하나요?
        그리고 이미 답글단이후에 답글버튼을 또 누르면 수정되는거 어렵네용 .. 각 답글 상태관리도 state로 하나요??
        답변 바로밑에 답글창만들기, 답글창길이만큼 아래 아이템들 위치 내리기</Container>
			</div>
			<TableToggle />
		</div>
		<div className="btn">
			<Link to={`study/${chap_id}/3`}>
      <img onClick={() => 
					handlePageChange(currentPage - 1)}
					width="80" height="80"
					src="https://img.icons8.com/ios/80/19A05E/circled-left-2.png" alt="circled-left-2"
				/>
			</Link>
			<Link to={`/teacher/${teacher_id}/study/${chap_id}/complete`} state={{userType, teacher_id}}>
        <button onClick={() => handlePageChange(currentPage + 1)} >완료</button>
			</Link>
		</div>
	</>
  );
}
