import React, { useEffect, useState } from "react";
import styled from "styled-components";
import "bootstrap/dist/css/bootstrap.min.css";
import StudentQuizListForm from "../../containers/StudentQuizListForm"; //원래 TacherQuizPageForm경로인데 백에서 구현안한거같아서 학생으로 연결
import axios from "axios";
// quiz components
const ListBlock = styled.div`
  position: relative;
  margin: auto;
  width: 70%;
  height: 100%;
  top: 5vh;
  left: 3vw;
`;

export default function TeacherStudyList() {
  const [lists, setLists ] = useState(null);
  
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          `http://101.101.219.109:8080/teacher/1/study`
        );
        setLists(response.data);
      } catch (e) {
        console.log(e);
      }
    };
    fetchData();
  }, []);
  if (!lists) {
    return null;
  }

  return (
    <>
      <ListBlock>
        <StudentQuizListForm lists={lists.no_study_list} />
      </ListBlock>
    </>
  );
}