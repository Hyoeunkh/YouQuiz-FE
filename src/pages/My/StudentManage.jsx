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
      <SubSidebar/>
      <SubHeader page={"학습 관리"} />
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
            {/*학생들목록이랑 이수여부 보는 표 */}
        </ListBlock>
    </>
  );
}
