import React from "react";
import { Link, useLocation } from "react-router-dom";
import { useSelector } from 'react-redux';

import "../style/Sidebar.scss"

export default function SideBar( {role} ) {
    const location = useLocation();

    //const { userType } = useSelector((state) => state.user);

    const isLoginPage = location.pathname.includes("/login");
    const isRegisterPage = location.pathname.includes("/register");
    const isMyPage = location.pathname.includes("/my");
    const isQuizPage = location.pathname === `/study`;

    const renderMenu = () => {
        if (role==="fuck") {
            return (
                <>
                    <li className={`nav-item ${isLoginPage ? "current-page" : ""}`}>
                        <Link to={`/login/${role}`}><img className="icon" src={isLoginPage ? "/user.png" : "/user-wh.png"} alt="" />로그인</Link>
                    </li>
                    <li className={`nav-item ${isRegisterPage ? "current-page" : ""}`}>
                        <Link to={`/register`}><img className="icon" src={isRegisterPage ? "/circle.png" : "/circle-wh.png"} alt="" />회원가입</Link>
                    </li>
                </>
            );
        } else {
            return (
                <>
                    <li className={`nav-item ${isMyPage ? "current-page" : ""}`}>
                        <Link to={`${role ==="student" ? `/my` : `/my/teacher/studystatus`}`}><img className="icon" src={isMyPage ? "/circle.png" : "/circle-wh.png"} alt="" />마이페이지</Link>
                    </li>
                </>
            );
        }
    };

    return (
        <>
            <nav className='nav-wrapper'>
                <ul className="nav-container">
                    <li className="Ylogo">
                        <Link to='/'>
                            <img className="sidelogo" src="/title-logo.png" alt="logo"/>
                        </Link>
                    </li>
                    {renderMenu()}
                    <li className={`nav-item ${isQuizPage ? "current-page" : ""}`}>
                        <Link to={`/study`}><img className="icon" src={isQuizPage ? "/book.png" : "/book-wh.png"} alt="" />학습</Link>
                    </li>
                    <li className="nav-item">
                        <Link to="#"><img className="icon" src="/help-wh.png" alt="" />이용안내</Link>
                    </li>
                </ul>
            </nav>
        </>
    );
}