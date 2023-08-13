import React, { useEffect, useState } from "react";
import styled from "styled-components";
import "bootstrap/dist/css/bootstrap.min.css";
import MyPageForm from "../../containers/MyPageForm";


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
      <MyPageForm  userType={"student"} student_id={"samplw_id"} page={"학습결과"} />
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
      <MyPageForm  userType={"teacher"} teacher_id={"20"} page={"채점 관리"} />
        <ListBlock>
            {/*채점관리 */}
        </ListBlock>
    </>
  );
}
