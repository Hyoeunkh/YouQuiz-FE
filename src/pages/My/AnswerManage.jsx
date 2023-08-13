import React, { useEffect, useState } from "react";
import styled from "styled-components";
import "bootstrap/dist/css/bootstrap.min.css";
import SubHeader from "../../component/base/SubHeader";
import SubSidebar from "../../component/base/SubSidebar";

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
      <SubSidebar id={sample_id} />
      <SubHeader page={"채점 관리"} />
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
            {/*패점관리*/}
        </ListBlock>
    </>
  );
}
