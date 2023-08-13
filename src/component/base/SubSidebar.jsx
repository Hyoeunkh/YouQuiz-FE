import React from "react";
import { Link, useLocation } from "react-router-dom";
import { styled } from "styled-components";

const ListContent = styled.div`
    .sub-container {
        display:flex;
        flex-direction: column;
        list-style: none;
        padding: 0;
        margin: 0;
        gap: 2vh;
    }
    a {
        color: black;
        text-decoration: none;
        font-size: 20px;
    }
    .current-page {
        a{
            font-weight: 600;
            color: #19A05E;
        }
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
                        <li className={`nav-item ${location.pathname === `/student/${student_id}` ? "current-page" : ""}`}>
                            <Link to={`/student/${student_id}`}>학습 결과</Link>
                        </li>
                        <li className={`nav-item ${location.pathname === `/student/${student_id}/update` ? "current-page" : ""}`}>
                            <Link to={`/student/${student_id}/update`}>개인정보 수정</Link>
                        </li>
                    </>
                )}

                {isTeacher && (
                    <>
                        <li className={`nav-item ${location.pathname === `/teacher/${teacher_id}/studystatus` ? "current-page" : ""}`}>
                            <Link to={`/teacher/${teacher_id}/studystatus`}>학습 관리</Link>
                        </li>
                        <li className={`nav-item ${location.pathname === `/teacher/${teacher_id}/evalutionstatus` ? "current-page" : ""}`}>
                            <Link to={`/teacher/${teacher_id}/evalutionstatus`}>채점 관리</Link>
                        </li>
                        <li className={`nav-item ${location.pathname === `/teacher/${teacher_id}/update` ? "current-page" : ""}`}>
                            <Link to={`/teacher/${teacher_id}/update`}>개인정보 수정</Link>
                        </li>
                    </>
                )}
            </ul>
        </ListContent>
    );
}