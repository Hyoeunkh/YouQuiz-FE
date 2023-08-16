import React from "react";
import { Link, useLocation } from "react-router-dom";
import { styled } from "styled-components";

const ListContent = styled.div`
    position: relative;
    float: left;
    width: 23vw;
    height:70vh;

    .sub-container {
        display:flex;
        float: right;
        width: 60%;
        flex-direction: column;
        align-items: start;
        list-style: none;
        padding: 0;
        margin-top: 6vh;
        gap: 4vh;
    }
    a {
        color: black;
        text-decoration: none;
        font-size: 1.5rem;
    }
    .current-page a {
            font-weight: 600;
            color: #19A05E;
    }

`;

export default function SubSideBar( { userType, student_id, teacher_id } ) {
    const location = useLocation();
    const isStudent = userType === "student";
    const isTeacher = userType === "teacher";

    return (
        <ListContent>
            <ul className="sub-container">
                {isStudent && (
                    <>
                        <li className={`nav-item ${location.pathname.includes(`/studystatus`) ? "current-page" : ""}`}>
                            <Link to={`/student/${student_id}/studystatus`}>학습 결과</Link>
                        </li>
                        <li className={`nav-item ${location.pathname.includes(`/update`) ? "current-page" : ""}`}>
                            <Link to={`/student/${student_id}/update`}>개인정보 수정</Link>
                        </li>
                    </>
                )}

                {isTeacher && (
                    <>
                        <li className={`nav-item ${location.pathname.includes(`studystatus`) ? "current-page" : ""}`}>
                            <Link to={`/teacher/${teacher_id}/studystatus`}>학습 관리</Link>
                        </li>
                        <li className={`nav-item ${location.pathname.includes(`/evaluationstatus`) ? "current-page" : ""}`}>
                            <Link to={`/teacher/${teacher_id}/evaluationstatus`}>채점 관리</Link>
                        </li>
                        <li className={`nav-item ${location.pathname.includes(`update`) ? "current-page" : ""}`}>
                            <Link to={`/teacher/${teacher_id}/update`}>개인정보 수정</Link>
                        </li>
                    </>
                )}
            </ul>
        </ListContent>
    );
}