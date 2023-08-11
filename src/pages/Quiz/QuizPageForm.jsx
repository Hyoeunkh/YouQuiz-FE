import React from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import "bootstrap/dist/css/bootstrap.min.css";

const Contents = styled.div`
  background-color: light-gray;

  height: 100px;

  .custom-list-item {
    margin-top: 2vh;
    margin-left: 5vw;
    width: 80vw;
    height: 100px;
  }
  .ms-2{
    display:flex;
    flex-direction: row;

    .youtubelist {
      height:80px;
      width:auto;
    }
  }
`;

const extractYoutubeVideoId = (url) => {
  const match = url.match(/(?:https?:\/\/)?(?:www\.)?youtu(?:be\.com\/watch\?v=|\.be\/)([\w\-\_]*)(&(amp;)?[\w\?=]*)?/);
  return match && match[1] ? match[1] : null;
};

const QuizPageForm = ({ no_study_list }) => {
  const { chap_id, youtube_url } = no_study_list;
  const navigate = useNavigate();

  const videoId = extractYoutubeVideoId(youtube_url);
  const imgsrc = videoId ? `https://img.youtube.com/vi/${videoId}/mqdefault.jpg` : "";

    return (
      <>
        <Contents
          onClick={() => {
            navigate("/quizmedia");
          }}
        >
          {/* 배열로 받아서 contents 수정하기 */}
          <ol class="list-group list-group-numbered">
            <li class="list-group-item d-flex justify-content-between align-items-start custom-list-item">
              <div class="ms-2 me-auto">
                <img class="youtubelist" src= {imgsrc} alt="" />
                <div class="fw-bold">Subheading</div>
              </div>
              <span class="badge bg-success rounded-pill custom-badge">
                학습하기
              </span>
            </li>
          </ol>
        </Contents>
      </>
    );
}
export default QuizPageForm;