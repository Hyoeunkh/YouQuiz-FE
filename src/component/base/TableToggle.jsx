import React, { useState } from 'react';
import { styled } from 'styled-components';

const TableWrapper = styled.div`
  height: 60vh;
  width: 75vw;
  display:flex;
  flex-direction:column;
  align-items:center;
  margin: 0 15vw;
  gap: 1rem;
`;
const STable = styled.div`
  width: 70%;
  height: 70%;
  overflow-y: auto;

  &::-webkit-scrollbar {
    width: .7vw;
  }
  &::-webkit-scrollbar-thumb {
    background: #D9D9D9;
    border-radius: 5px;
  }
  &::-webkit-scrollbar-track {
    background: none;
  }
  table {
    width: 100%;
    height: 100%;
    text-align: center;
    border-collapse: collapse;
  }
  td{
    padding: 2vh 0;
  }
  th {
    font-weight: 600;
  }
  thead {
    position: sticky;
    top: 0;
    background-color: #F4F4F4;
    height: 5vh;
    box-shadow: 0px 2px 0px 0px #474747;
  }
  textarea {
    width: 100%;
    background-color: #F4F4F4;
    border-radius: 0;
    border-top:none;
    border-left:none;
  }
  button{
    background: none;
    color: #19A05e;
    font-weight: bold;
  }
  .complete-btn {
    background-color: #19A05e;
    color: white;
    border-radius: .3rem;
    float:right;
  }
`;
const StudentTable = ({ studentData, onReply, replyingStudentId, text, handleChange, handleCompleteReply, lastRepliedStudentId }) => {
  return (
    <STable>
      <table>
        <thead>
          <tr>
            <th>번호</th>
            <th>이름</th>
            <th>답안</th>
            <th></th>
          </tr>
        </thead>
        {studentData.map((student) => (
            <React.Fragment key={student.id}>
              <tr style={{
                backgroundColor:
                (lastRepliedStudentId === student.id && replyingStudentId !== student.id) ?
                '#F8F8F8' : 'white' }}
              >
                <td>{student.studentNumber}</td>
                <td>{student.name}</td>
                <td width="70%">{student.content}</td>
                <td>
                  <button onClick={() => onReply(student.id)}>답글</button>
                </td>
              </tr>
              {replyingStudentId === student.id && (
                <tr>
                  <td colSpan="4">
                    <textarea
                      rows="4"
                      cols="50"
                      placeholder="답글을 달아주세요"
                      value={text[student.id] || ''}
                      onChange={(event) => handleChange(event, student.id)}
                    />
                    <button className="complete-btn"
                      onClick={() => 
                        handleCompleteReply(student.id, text[student.id])
                      }
                    >
                      완료
                    </button>
                  </td>
                </tr>
              )}
            </React.Fragment>
          ))}
      </table>
    </STable>
  );
};

const TableToggle = () => {

  const initialStudentData = [
    // sample data
    { id: 1, studentNumber: '21번', name: '이동건', content: '2013년 서울에서 멋쟁이사자처럼 코스프레를 함2013년 서울에서 멋쟁이사자처럼 코스프레를 함2013년 서울에서 멋쟁이사자처럼 코스프레를 함2013년 서울에서 멋쟁이사자처럼 코스프레를 함2013년 서울에서 멋쟁이사자처럼 코스프레를 함2013년 서울에서 멋쟁이사자처럼 코스프레를 함' },
    { id: 2, studentNumber: '11번', name: '편수빈', content: '2013년 서울에서 멋쟁이사자처럼 코스프레를 함' },
    { id: 3, studentNumber: '21번', name: '이동건', content: '2013년 서울에서 멋쟁이사자처럼 코스프레를 함' },
    { id: 4, studentNumber: '11번', name: '편수빈', content: '2013년 서울에서 멋쟁이사자처럼 코스프레를 함' },
    { id: 5, studentNumber: '21번', name: '이동건', content: '2013년 서울에서 멋쟁이사자처럼 코스프레를 함' },
    { id: 6, studentNumber: '11번', name: '편수빈', content: '2013년 서울에서 멋쟁이사자처럼 코스프레를 함' },
  
  ];

  const [replyingStudentId, setReplyingStudentId] = useState(null);
  const [lastRepliedStudentId, setLastRepliedStudentId] = useState(null);
  const [text, setText] = useState([]);

  const handleReply = (studentId) => {
    setReplyingStudentId(studentId);
    setLastRepliedStudentId(studentId);
  };
  const handleChange = (event, studentId) => {
    setText((prevText) => ({
      ...prevText,
      [studentId]: event.target.value,
    }));
  };

  const handleCompleteReply = (studentId, replyContent) => {
    //답글을 저장하고 관련 상태를 업데이트
    console.log(`학생${studentId}: ${replyContent}`);
    setReplyingStudentId(null);
  };

  return (
    <TableWrapper>
      <StudentTable
        studentData={initialStudentData}
        onReply={handleReply}
        replyingStudentId={replyingStudentId}
        text={text}
        handleChange={handleChange}
        handleCompleteReply={handleCompleteReply}
        lastRepliedStudentId={lastRepliedStudentId}
      />
    </TableWrapper>
  );
};

export default TableToggle;
