import React, { useState, useEffect } from "react";
import styled from "styled-components";
import "bootstrap/dist/css/bootstrap.min.css";
import YouTube from "react-youtube";
import QuizTitle from "../../../component/QuizTitle";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import axios from "axios";

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
//result 일경우????
export default function TquizMedia() {
  const [questions, setQuestions] = useState(null);
  const { role, id } = useSelector((state) => state.auth);
  const location = useLocation();
  const navigate = useNavigate();
  const { chap_id } = location.state;
  useEffect(() => {
      const Data = async () => {
        try {
          const response = await axios.get(
            `http://101.101.219.109:8080/${role}/${id}/study/1/${chap_id}`
          );
          setQuestions(response.data);

        } catch (e) {
          console.log(e);
        }
      };
      Data();
  }, [questions]);
  if (!questions) {
    return null;
  }
  const extractYoutubeVideoId = (url) => {
    const match = url.match(
      /(?:https?:\/\/)?(?:www\.)?youtu(?:be\.com\/watch\?v=|\.be\/)([\w\-\_]*)(&(amp;)?[\w\?=]*)?/
    );
    return match && match[1] ? match[1] : null;
  };

  const videoId = extractYoutubeVideoId(questions.youtube_link);

  return (
    <>
      <QuizTitle
        text={questions.title}
        currentPage={1}
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
          onClick={() => navigate(`/teacher/study/${chap_id}/quiz`, {state: { questions:questions.quizEntityList, title:questions.title } })}
        />
      </Btn>
    </>
  );
}
