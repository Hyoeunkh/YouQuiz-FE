import React from "react";
import styled from "styled-components";
import SubSidebar from "../component/base/SubSidebar";
import SubHeader from "../component/base/SubHeader";

const MyFormWrapper = styled.div`
    display:flex;
    margin-left: 16.5vw;
    margin-top: 5vh;
    gap: 5vw;
`;

const MyPageForm = ( { userType, student_id, teacher_id, chap_id, page } ) => {

    return (
      <> 
        <MyFormWrapper>
            <SubSidebar userType={userType} student_id={student_id}/>
            <SubHeader page={page} />
        </MyFormWrapper>
      </>
    );
}
export default MyPageForm;