import React from "react";
import SubSidebar from "../component/base/SubSidebar";
import SubHeader from "../component/base/SubHeader";

const MyPageForm = ( { userType, student_id, teacher_id, chap_id, page, title } ) => {

    return (
      <> 
          <SubSidebar userType={userType} student_id={student_id} teacher_id={teacher_id}/>
          <SubHeader page={page} title={title}/>
        </>
    );
}
export default MyPageForm;




