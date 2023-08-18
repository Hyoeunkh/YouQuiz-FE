import React, { useEffect, useState } from "react";
import styled from "styled-components";
import "bootstrap/dist/css/bootstrap.min.css";
import StudentQuizListForm from "../../../containers/StudentQuizListForm";
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

export default function QuizPage( lists ) {

  return (
    <>
      <ListBlock>
        <StudentQuizListForm lists={lists} />
      </ListBlock>
    </>
  );
}
