import React, { useEffect, useState } from "react";
import styled from "styled-components";
import StudentQuizListForm from "../../../containers/StudentQuizListForm";
import MyPageForm from "../../../containers/MyPageForm";
import axios from "axios";

const ListBlock = styled.div`
  width: 85%;
  margin-top: 4vh;
`;

export default function StudyResult() {
  const [lists, setLists] = useState(null);
  const student_id = 1;
    useEffect(() => {
      const fetchData = async () => {
        try {
          const response = await axios.get(
            `http://101.101.219.109:8080/student/${student_id}/studystatus`
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
          <StudentQuizListForm lists={lists.studied_chapter} />
        </ListBlock>
    </>
  );

}
