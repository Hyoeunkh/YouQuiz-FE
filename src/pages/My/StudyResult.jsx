import React, { useEffect, useState } from "react";
import styled from "styled-components";
import QuizPageForm from "../../containers/QuizPageForm";
import MyPageForm from "../../containers/MyPageForm";
import axios from "axios";

const ListBlock = styled.div`
  width: 85%;
  margin-top: 4vh;
`;

export default function StudyResult() {
  const [lists, setLists] = useState(null);
  
    useEffect(() => {
      const fetchData = async () => {
        try {
          const response = await axios.get(
            "http://101.101.219.109/student/1/studystatus"
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
      <MyPageForm  userType={"student"} student_id={"sample_id"} page={"학습결과"} />
        <ListBlock>
          <QuizPageForm lists={lists.studied_chapter} />
        </ListBlock>
    </>
  );

}
