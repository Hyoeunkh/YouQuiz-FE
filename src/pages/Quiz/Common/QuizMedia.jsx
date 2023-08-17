import React, { useState } from "react";
import styled from "styled-components";
import "bootstrap/dist/css/bootstrap.min.css";
import YouTube from "react-youtube";
import QuizTitle from "../../../component/base/QuizTitle";
import { useNavigate, useParams } from "react-router-dom";

// quiz components
const Contents = styled.div`
  background-color: light-gray;
  height: 55vh;
  width: 65vw;
  display: flex;
  flex-direction: column;
  margin: 0 20vw;
  font-size: 1.5rem;
  .youtube {
  }
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

export default function QuizMedia({
  youtube_link,
  title,
  totalPageCount,
  studentNumber = 1,
  studyNumber = 1,
}) {
  console.log("Student Number:", studentNumber);
  console.log("Study Number:", studyNumber);
  const navigate = useNavigate();
  const [currentPage, setCurrentPage] = useState(1);
  const nextStudentNumber = parseInt(studentNumber) + 1;
  const nextStudyNumber = parseInt(studyNumber) + 1;

  if (!youtube_link) {
    return null;
  }
  const extractYoutubeVideoId = (url) => {
    const match = url.match(
      /(?:https?:\/\/)?(?:www\.)?youtu(?:be\.com\/watch\?v=|\.be\/)([\w\-\_]*)(&(amp;)?[\w\?=]*)?/
    );
    return match && match[1] ? match[1] : null;
  };

  const videoId = extractYoutubeVideoId(youtube_link);

  const handleRightClick = (nextStudentNumber, nextStudyNumber) => {
    const nextUrl = `/student/${parseInt(nextStudentNumber)}/study/${parseInt(
      nextStudyNumber
    )}`;
    navigate(nextUrl);
  };
  return (
    <>
      <QuizTitle
        text={title}
        currentPage={currentPage}
        totalPageCount={totalPageCount}
      />
      <Contents>
        <p>
          <img
            width="40"
            height="40"
            src="https://img.icons8.com/ios/50/19a05e/cinema---v1.png"
            alt="cinema---v1"
          />
          영상을 시청해주세요!
        </p>
        <div className="youtube">
          <YoutubeVideo videoId={videoId} />
        </div>
      </Contents>

      <Btn>
        <img
          width="80"
          height="80"
          src="https://img.icons8.com/ios/80/19A05E/circled-right-2.png"
          alt="circled-left-2"
          onClick={() => handleRightClick(nextStudentNumber, nextStudyNumber)}
        />
      </Btn>
    </>
  );
}
