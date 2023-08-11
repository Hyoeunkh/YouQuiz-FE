import React, { useState }  from "react";
import styled from "styled-components";
import "bootstrap/dist/css/bootstrap.min.css";
import YouTube from "react-youtube";
import QuizTitle from "../../component/base/QuizTitle";
import { Link } from "react-router-dom";

const gray = "#747474";
const green = "#19A05E";

// quiz components
const Contents = styled.div`
  background-color: light-gray;
  height: 55vh;
  width: 75vw;
  display:flex;
  flex-direction:column;
  margin: 0 20vw;
  font-size: 1.5rem;

  img {
    margin-right: 0.5vw;
  }
`;
const Btn = styled.div`
  margin-left: 85vw;
`;
//버튼위치다시조정


const YoutubeVideo = ({ videoId }) => {
  const opts = {
    height: "490",
    width: "940",
    playerVars: {
      // https://developers.google.com/youtube/player_parameters
      autoplay: 0,
    },
  };

  return <YouTube videoId={videoId} opts={opts} />;
};

export default function QuizMedia() {
  const [currentPage, setCurrentPage] = useState(1);

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  return (
    <>
      {/* data 받으면 변수값으로 변경*/}
      <QuizTitle text="[1단계] 교내 휴대전화 허용 어디까지?" currentPage={currentPage} totalPageCount={5}/>
      <Contents>
        <p>
          <img width="40" height="40" src="https://img.icons8.com/ios/50/19a05e/cinema---v1.png" alt="cinema---v1"/>
          영상을 시청해주세요!
        </p>
        <YoutubeVideo videoId="YhY5PojUD_M" />
      </Contents>

      <Btn>
        <Link to="/firstq" >
          <img onClick={() => handlePageChange(currentPage + 1)} width="80" height="80" src="https://img.icons8.com/ios/80/19A05E/circled-right-2.png" alt="circled-left-2"/>
        </Link>
      </Btn>
      
    </>
  );
}
