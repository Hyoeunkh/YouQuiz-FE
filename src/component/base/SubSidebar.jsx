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

export default function SideBar() {
    const location = useLocation();

    // 현재 경로를 가져와서 로그인 페이지에 있는지 확인
    const isStudentResultPage = location.pathname === "/studyresult";
    const isUpdatePage = location.pathname === "/update";

    return (
        <>
            <ListContent>
                <ul className="sub-container">
                    <li className={`nav-item ${isStudentResultPage ? "current-page" : ""}`}>
                        <Link to="/studyresult">학습 결과</Link>
                    </li>
                    <li className={`nav-item ${isUpdatePage ? "current-page" : ""}`}>
                        <Link to="/update">개인정보 수정</Link>
                    </li>
                </ul>
            </ListContent>
        </>
    );
}