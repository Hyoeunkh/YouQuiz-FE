import React, { useEffect } from "react";
import styled from "styled-components";
import "bootstrap/dist/css/bootstrap.min.css";
import TeacherQuizListForm from "../../../containers/TeacherQuizListForm";
import { useSelector, useDispatch } from "react-redux";
import { TeacherFetchThunk } from "../../../store/teacherSlice";

const ListBlock = styled.div`
  position: relative;
  margin: auto;
  width: 70%;
  height: 100%;
  top: 5vh;
  left: 3vw;
`;

export default function TeacherStudyList() {
  const { status, data }= useSelector((state)=> state.teacher);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(TeacherFetchThunk());
  }, []);

  if(status === "success"){
    return (
      <>
        <ListBlock>
          <TeacherQuizListForm lists={data.teacherChapterList} />
        </ListBlock>
      </>
    );
  };
}