import React, { useEffect, useState } from "react";
import styled from "styled-components";
import "bootstrap/dist/css/bootstrap.min.css";
import QuizPageForm from "./QuizPageForm";
import axios from "axios";

// quiz components
const ListBlock = styled.div`
  height: 100px;
`;

const sample = {
  chap_id: "10",
  youtube_url: "https://youtu.be/YhY5PojUD_M",
};


export default function QuizPage() {
  const [lists, setLists ] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          "/{PROTOCOL}/{HOST}:{port}/student/${student_id}/study"
          /*이거어떻게사용하는지 모르겠어요ㅠㅠ*/
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
}
