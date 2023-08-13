import React, { useEffect, useState } from "react";
import styled from "styled-components";
import "bootstrap/dist/css/bootstrap.min.css";
import QuizPageForm from "../../containers/QuizPageForm";
import MyPageForm from "../../containers/MyPageForm";
import axios from "axios";
import { Outlet } from "react-router-dom";

const ListBlock = styled.div`
  position: relative;
  margin: 0 auto;
  width: 55%;
  height: 100%;
  top: -5vh;
`;

const sample = {
  score: "111",
  chap_id: "10",
  youtube_url: "https://youtu.be/YhY5PojUD_M",
};



export default function StudyResult() {
  const [lists, setLists] = useState(null);
  
  {/* 실제코드
    useEffect(() => {
      const fetchData = async () => {
        try {
          const response = await axios.get(
            "/{PROTOCOL}/{HOST}:{port}/student/${student_id}"
          );
          setLists(response.data.lists);
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
      <MyPageForm  userType={"student"} student_id={"sample_id"} page={"학습결과"} />
        <ListBlock>
          {lists.map(list => (
            <QuizPageForm key={list.url} no_study_list={sample} />
          ))}
        </ListBlock>
    </>
  );
          */}

  return (
    <>
      <MyPageForm  userType={"student"} student_id={"20"} page={"학습 결과"} />
      <ListBlock>
          <QuizPageForm no_study_list={sample} />
      </ListBlock>
    </>
  );
}
