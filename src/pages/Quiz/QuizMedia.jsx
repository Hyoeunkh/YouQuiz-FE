import React from "react";
import styled from "styled-components";
import "bootstrap/dist/css/bootstrap.min.css";
import YouTube from "react-youtube";
import QuizTitle from "../../component/base/QuizTitle";

const gray = "#747474";
const green = "#19A05E";

// quiz components
const Contents = styled.div`
  background-color: light-gray;
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

  return (
    <>
      <Contents>
        {/* data 받으면 변수값으로 변경*/}
        <QuizTitle text="[1단계] 교내 휴대전화 허용 어디까지?" />
        <p> 영상을 시청해주세요!</p>
        <YoutubeVideo videoId="YhY5PojUD_M" />
      </Contents>
    </>
  );
}
