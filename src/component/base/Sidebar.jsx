import React from "react";
import { Link, useLocation } from "react-router-dom";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser,faCircleUser, faBook, faCircleQuestion } from "@fortawesome/free-solid-svg-icons";

import "../../style/Sidebar.scss"

export default function SideBar() {
    const location = useLocation();

    // 현재 경로를 가져와서 로그인 페이지에 있는지 확인
    const isLoginPage = location.pathname === "/login";
    const isRegisterPage = location.pathname === "/register";
    const isQuizPage = location.pathname === "/quiz";

    return (
        <>
            <nav className='nav-wrapper'>
                <ul className="nav-container">
                    <li>
                        <Link to='/'>
                        <img className="logo"  src="title-logo.png" alt="logo"/>
                        </Link>
                    </li>
                    <li className={`nav-item ${isLoginPage ? "current-page" : ""}`}>
                        <Link to="/login"><FontAwesomeIcon className="icon" icon={faUser} style={{ color: isLoginPage ? "#19a05e" : "#ffffff",}} />로그인</Link>
                    </li>
                    <li className={`nav-item ${isRegisterPage ? "current-page" : ""}`}>
                        <Link to="/register"><FontAwesomeIcon className="icon" icon={faCircleUser} style={{ color: isRegisterPage ? "#19a05e" : "#ffffff",}} />회원가입</Link>
                    </li>
                    <li className={`nav-item ${isQuizPage ? "current-page" : ""}`}>
                            <Link to="/quiz"><FontAwesomeIcon className="icon" icon={faBook} style={{ color: isQuizPage ? "#19a05e" : "#ffffff", }} />학습</Link>
                    </li>
                    <li className="nav-item">
                            <Link to="#"><FontAwesomeIcon className="icon" icon={faCircleQuestion} style={{ color: "#ffffff",}} />이용안내</Link>
                    </li>
                </ul>
            </nav>
        </>
    )
}