import React, { useState } from 'react';
import { styled } from 'styled-components';

const StudentTable = ({ studentData, onReply }) => {
  return (
    <table>
      <thead>
        <tr>
          <th>번호</th>
          <th>이름</th>
          <th>답안</th>
          <th></th>
        </tr>
      </thead>
      <tbody>
        {studentData.map((student) => (
          <tr key={student.id}>   
            <td>{student.studentNumber}</td>
            <td>{student.name}</td>
            <td>{student.content}</td>
            <td>
              <button onClick={() => onReply(student.id)}>답글</button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};
const TableWrapper = styled.div`
  height: 55vh;
  width: 75vw;
  display:flex;
  flex-direction:column;
  align-items:center;
  margin: 0 15vw;
  gap:1rem;
`;

const TableToggle = () => {
  const [text, setText] = useState('');
  const handleChange = (event) => {
		setText(event.target.value);
	};

  
  const initialStudentData = [
    { id: 1, studentNumber: '21번', name: '이동건', content: '2013년 서울에서 멋쟁이사자처럼 코스프레를 함' },
    { id: 2, studentNumber: '11번', name: '편수빈', content: '2013년 서울에서 멋쟁이사자처럼 코스프레를 함' },
  ];

  const [replyingStudentId, setReplyingStudentId] = useState(null);

  const handleReply = (studentId) => {
    setReplyingStudentId(studentId);
  };

  const handleCompleteReply = (studentId, replyContent) => {
    //답글을 저장하고 관련 상태를 업데이트
    console.log(`학생 ${studentId}의 답글: ${replyContent}`);
    setReplyingStudentId(null);
  };

  return (
    <TableWrapper>
      <StudentTable
        studentData={initialStudentData}
        onReply={handleReply}
      />
      {replyingStudentId !== null && (
        <div>
          <textarea
            rows="4"
            cols="50"
            placeholder="답글을 입력하세요"
            value={text}
            onChange={handleChange}
          />
          <button onClick={() => handleCompleteReply(replyingStudentId, text)}>
            완료
          </button>
        </div>
      )}
    </TableWrapper>
  );
};

export default TableToggle;
