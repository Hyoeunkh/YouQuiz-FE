import React, { useEffect } from "react";
import styled from "styled-components";
import ResultQuizListForm from "../../../containers/ResultQuizListForm";
import MyPageForm from "../../../containers/MyPageForm";
import { useSelector, useDispatch } from "react-redux";
import { ResultFetchThunk } from "../../../store/resultSlice";

const ListBlock = styled.div`
  width: 85%;
  margin-top: 4vh;
`;

export default function ResultQuizPage() {
  const { status, data }= useSelector((state)=> state.result);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(ResultFetchThunk());
    //console.log("response");
  }, []);
  if(status === "success"){
    console.log("response");
  };
  return (
    <>
      <MyPageForm  userType={"student"} student_id={"sample_id"} page={"학습결과"} />
        <ListBlock>
          <ResultQuizListForm lists={data.studied_chapter} />
        </ListBlock>
    </>
    );
}
