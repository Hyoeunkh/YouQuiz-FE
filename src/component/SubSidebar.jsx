import React from "react";
import { Link, useLocation } from "react-router-dom";
import { styled } from "styled-components";

const ListContent = styled.div`
    position: relative;
    float: left;
    width: 23vw;
    height: 70vh;
    margin-left: 10vw;

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

export default function SubSideBar( { userType} ) {
    const location = useLocation();
    const isStudent = userType === "student";
    const isTeacher = userType === "teacher";

    return (
        <ListContent>
            <ul className="sub-container">
                {isStudent && (
                    <>
                        <li className={`nav-item ${location.pathname.includes(`/result`) ? "current-page" : ""}`}>
                            <Link to={`/my/result`}>학습 결과</Link>
                        </li>
                        <li className={`nav-item ${location.pathname.includes(`/update`) ? "current-page" : ""}`}>
                            <Link to="#">개인정보 수정</Link>
                        </li>
                    </>
                )}

                {isTeacher && (
                    <>
                        <li className={`nav-item ${location.pathname === (`/teacher/my/status`) ? "current-page" : ""}`}>
                            <Link to={`/teacher/my/status`}>학습 관리</Link>
                        </li>
                        <li className={`nav-item ${location.pathname.includes(`/evaluationstatus`) ? "current-page" : ""}`}>
                            <Link to={`/teacher/my/evaluationstatus`}>채점 관리</Link>
                        </li>
                        <li className={`nav-item ${location.pathname.includes(`update`) ? "current-page" : ""}`}>
                            <Link to="#">개인정보 수정</Link>
                        </li>
                    </>
                )}
            </ul>
        </ListContent>
    );
}