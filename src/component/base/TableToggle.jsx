import React, { useState } from 'react';
import { styled } from 'styled-components';
import axios from 'axios';

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
            <React.Fragment key={student.student_id}>
              <tr style={{
                backgroundColor:
                (lastRepliedStudentId === student.student_id && replyingStudentId !== student.student_id) ?
                '#F8F8F8' : 'white' }}
              >
                <td>{student.student_id}</td>
                <td>{student.student_name}</td>
                <td width="70%">{student.answer_sentence}</td>
                <td>
                  <button onClick={() => onReply(student.student_id)}>답글</button>
                </td>
              </tr>
              {replyingStudentId === student.student_id && (
                <tr>
                  <td colSpan="4">
                    <textarea
                      rows="4"
                      cols="50"
                      placeholder="답글을 달아주세요"
                      value={text[student.student_id] || ''}
                      onChange={(event) => handleChange(event, student.student_id)}
                    />
                    <button className="complete-btn"
                      onClick={() => 
                        handleCompleteReply(student.student_id, text[student.student_id])
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

  const [replyingStudentId, setReplyingStudentId] = useState(null);
  const [lastRepliedStudentId, setLastRepliedStudentId] = useState(null);
  const [text, setText] = useState([]);
  const [data, setData] = useState([]);

  const StudentData = async () => {
    try {
      const response = await axios.get(
        "http://101.101.219.109:8080/teacher/1/study/1/1"
      );
      setData(response.data.answer_sentence_list);
    } catch (e) {
      console.log(e);
    }
  };
  StudentData();

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
        studentData={data}
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
