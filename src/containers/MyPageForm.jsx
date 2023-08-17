import React from "react";
import SubSidebar from "../component/SubSidebar";
import SubHeader from "../component/SubHeader";

const MyPageForm = ( { userType, student_id, teacher_id, chap_id, page, title } ) => {

    return (
      <> 
          <SubSidebar userType={userType} student_id={student_id} teacher_id={teacher_id}/>
          <SubHeader page={page} title={title}/>
        </>
    );
}
export default MyPageForm;




