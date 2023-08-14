import React, { useEffect, useState } from "react";
import styled from "styled-components";
import "bootstrap/dist/css/bootstrap.min.css";
import QuizPageForm from "../../../containers/QuizPageForm";
import axios from "axios";
// quiz components
const ListBlock = styled.div`
  position: relative;
  margin: 0 auto;
  width: 70%;
  height: 100%;
`;

const sample = {
  chap_id: "10",
  youtube_url: "https://youtu.be/YhY5PojUD_M",
};


export default function QuizPage() {
  const [lists, setLists ] = useState(null);
  
{/*실제코드
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          "/{PROTOCOL}/{HOST}:{port}/student/${student_id}/study"
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
          <QuizPageForm no_study_list={sample} />
      </ListBlock>
    </>
  );
}

