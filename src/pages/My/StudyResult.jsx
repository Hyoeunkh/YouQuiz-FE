import React, { useEffect, useState } from "react";
import styled from "styled-components";
import "bootstrap/dist/css/bootstrap.min.css";
import QuizPageForm from "../Quiz/QuizPageForm";
import axios from "axios";

const ListBlock = styled.div`
  height: 100%;
`;

const sample = {
  score: "111",
  chap_id: "10",
  youtube_url: "https://youtu.be/YhY5PojUD_M",
};



export default function QuizPage() {
  const [lists, setLists] = useState(null);


{/* 실제코드
  return (
    <>
      <SubSidebar/>
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
        <ListBlock>
            <QuizPageForm  no_study_list={sample} />
        </ListBlock>
    </>
  );
}
