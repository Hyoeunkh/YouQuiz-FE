import React from "react";
import { Link, useLocation } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faUser,
  faCircleUser,
  faBook,
  faCircleQuestion,
} from "@fortawesome/free-solid-svg-icons";
import styled from "styled-components";
import "bootstrap/dist/css/bootstrap.min.css";
import Header from "../../component/base/Header";
import YouTube from "react-youtube";

const gray = "#747474";
const green = "#19A05E";

//Nav components
const NavWrapper = styled.nav`
  position: fixed;
  height: 100%;
  width: 130px;
  display: flex;
  flex-direction: column; /* flex-direction 값을 수정 */
  align-items: center;
  background-color: ${green};
`;

const NavContainer = styled.ul`
  width: 130px;
  list-style: none;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  position: fixed;
  top: 0;
  padding: 0; /* 추가 */
  margin: 0; /* 추가 */
  .logo {
    display: flex;
  }

  .nav-item {
    width: 130px;
    height: 130px;
    color: white;
    display: flex;
    text-decoration: none;
    justify-content: center;
    align-items: center;

    a {
      display: flex;
      flex-direction: column;
      font-size: 21px;
      line-height: 25px;
      font-weight: 450;
      color: inherit;
      text-decoration: none;
    }

    .icon {
      font-size: 40px;
      padding-bottom: 10px;
    }
  }

  .current-page {
    background-color: white;
    a {
      color: ${green};
    }
  }
`;

// quiz components
const Contents = styled.div`
  margin-top: 125px;
  background-color: light-gray;
  margin-left: 150px;
  position: fixed;

  height: 100px;

  .custom-list-item {
    margin-top: 2vh;
    margin-left: 5vw;
    width: 80vw;
    height: 100px;
  }
`;

const YoutubeVideo = ({ videoId }) => {
  const opts = {
    height: "390",
    width: "640",
    playerVars: {
      // https://developers.google.com/youtube/player_parameters
      autoplay: 0,
    },
  };

  return <YouTube videoId={videoId} opts={opts} />;
};

export default function QuizMedia() {
  const location = useLocation();
  const isLoginPage = location.pathname === "/login";
  const isRegisterPage = location.pathname === "/register";
  const isQuizPage = location.pathname === "/quiz";

  return (
    <>
      <Header path={isQuizPage}></Header>
      <NavWrapper className="nav-wrapper">
        <NavContainer className="nav-container">
          <li>
            <Link to="/">
              <img className="logo" src="title-logo.png" alt="logo" />
            </Link>
          </li>
          <li className={`nav-item ${isLoginPage ? "current-page" : ""}`}>
            <Link to="/login">
              <FontAwesomeIcon
                className="icon"
                icon={faUser}
                style={{ color: isLoginPage ? green : "#ffffff" }}
              />
              로그인
            </Link>
          </li>
          <li className={`nav-item ${isRegisterPage ? "current-page" : ""}`}>
            <Link to="/register">
              <FontAwesomeIcon
                className="icon"
                icon={faCircleUser}
                style={{ color: isRegisterPage ? green : "#ffffff" }}
              />
              회원가입
            </Link>
          </li>
          <li className={`nav-item ${isQuizPage ? "current-page" : ""}`}>
            <Link to="/quiz">
              <FontAwesomeIcon
                className="icon"
                icon={faBook}
                style={{ color: isQuizPage ? green : "#ffffff" }}
              />
              학습
            </Link>
          </li>
          <li className="nav-item">
            <Link to="#">
              <FontAwesomeIcon
                className="icon"
                icon={faCircleQuestion}
                style={{ color: "#ffffff" }}
              />
              이용안내
            </Link>
          </li>
        </NavContainer>
      </NavWrapper>
      <Contents>
        {/* data 받으면 변수값으로 변경*/}
        <h1>[1단계] 교내 휴대 전화 허용 어디까지?</h1>
        <p> 영상을 시청해주세요!</p>
        <YoutubeVideo videoId="YhY5PojUD_M" />
      </Contents>
    </>
  );
}
