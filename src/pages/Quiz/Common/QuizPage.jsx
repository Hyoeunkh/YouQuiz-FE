import React, { useEffect, useState } from "react";
import styled from "styled-components";
import "bootstrap/dist/css/bootstrap.min.css";
import QuizPageForm from "../../../containers/QuizPageForm";
import axios from "axios";
// quiz components
const ListBlock = styled.div`
  position: relative;
  margin: auto;
  width: 70%;
  height: 100%;
  top: 5vh;
  left: 3vw;
`;

//teacher api따로있음 리스트 띄우려면 페이지따로만들어야함
export default function QuizPage() {
  const [lists, setLists ] = useState(null);
  
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          `http://localhost:3000/no_study_list`
        );
        setLists(response.data);
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
        <QuizPageForm lists={lists} />
      </ListBlock>
    </>
  );
}
