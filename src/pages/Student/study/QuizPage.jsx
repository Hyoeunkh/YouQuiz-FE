import React, { useEffect } from "react";
import styled from "styled-components";
import "bootstrap/dist/css/bootstrap.min.css";
import StudentQuizListForm from "../../../containers/StudentQuizListForm";
import { useSelector, useDispatch } from "react-redux";
import { ChapFetchThunk } from "../../../store/chapSlice";

const ListBlock = styled.div`
  position: relative;
  margin: auto;
  width: 70%;
  height: 100%;
  top: 5vh;
  left: 3vw;
`;

export default function QuizPage( ) {
  const { status, data }= useSelector((state)=> state.chap);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(ChapFetchThunk());
  }, []);
  
  if(status === "success"){
    return (
      <>
        <ListBlock>
          <StudentQuizListForm lists={data.no_study_list} />
        </ListBlock>
      </>
    );
  };
}
