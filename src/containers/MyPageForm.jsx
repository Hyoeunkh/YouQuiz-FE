import React from "react";
import SubSidebar from "../component/SubSidebar";
import SubHeader from "../component/SubHeader";

const MyPageForm = ( { userType, page, title } ) => {

    return (
      <> 
          <SubSidebar userType={userType}/>
          <SubHeader page={page} title={title}/>
        </>
    );
}
export default MyPageForm;




