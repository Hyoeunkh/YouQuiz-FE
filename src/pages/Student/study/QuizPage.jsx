import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import styled from "styled-components";
import "bootstrap/dist/css/bootstrap.min.css";
import StudentQuizListForm from "../../../containers/StudentQuizListForm";
    
// quiz components
const ListBlock = styled.div`
  position: relative;
  margin: auto;
  width: 70%;
  height: 100%;
  top: 5vh;
  left: 3vw;
`;

export default function QuizPage( ) {
  const { data }= useSelector((state)=> state.chap);
  // console.log(data);
  return (
    <>
      <ListBlock>
        <StudentQuizListForm lists={data.no_study_list} />
      </ListBlock>
    </>
  );
}
