import React from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import "bootstrap/dist/css/bootstrap.min.css";

const QuizFormWrapper = styled.div`
  position: absolute;
  width: 100%;

  .Contents {
    height: 100%;
    width: 100%;
  }
  ol {
    padding: 0;
    gap:3vh;
  }
  .custom-list-item {
    text-align: center;
    width: 100%;
    height: 150px;
    padding: 0;
    border: 1px solid #D9D9D9;
    cursor: pointer;
  }
  .list-container {
    height:100%;
    width:100%;
    display: flex;
    flex-direction: row;
  }
  .youtubelist {
    height:100%;
  }
  .custom-text{
    width:100%;
    text-align: start;
    margin: 3vh 0;
  }
  .levle-con {
    display: flex;
    gap: 1vw;
  }
  .level-con span {
    margin: auto 0;
    font-size: 1.2rem;
  }
  .level {
    border: 1px solid #19a05e;
    border-radius: 5rem;
    width: 4vw;
    text-align: center;
    color: #19a05e;
    font-size: 1rem;
    padding: 5px;
  }
  .custom-bad {
    width: 20%;
    height:40%;
    color: white;
    border-radius: .75rem;
    margin-right: 2vw;
    background-color: #19a05e;
    justify-content: center;
    align-items: center;
    display: flex;
  }
`;

const extractYoutubeVideoId = (url) => {
  const match = url.match(
    /(?:https?:\/\/)?(?:www\.)?youtu(?:be\.com\/watch\?v=|\.be\/)([\w\-\_]*)(&(amp;)?[\w\?=]*)?/
  );
  return match && match[1] ? match[1] : null;
};

const QuizPageForm = ({ lists }) => {
  const navigate = useNavigate();

  return (
    <QuizFormWrapper>
      <div className="Contents">
        <ol className="list-group">
          {lists.map((item, index) => {
            const videoId = extractYoutubeVideoId(item.youtube_url);
            const imgsrc = videoId
              ? `https://img.youtube.com/vi/${videoId}/mqdefault.jpg`
              : "";

            return (
              <li
                key={index}
                className="list-group-item d-flex justify-content-between align-items-center custom-list-item"
                onClick={() => navigate(`${item.chap_id}`)}
              >
                <div className="list-container">
                  <img className="youtubelist" src={imgsrc} alt="" />
                  <div className="ms-5 custom-text">
                    <div className="levle-con">
                      <div className="level fw-bold">{item.chap_id}단계</div>
                      {item.score ? <span>({item.score}점/ 100점)</span> : null}
                    </div>
                    <div className="fw-bold fs-3 mt-2">제목</div>
                  </div>
                </div>
                <span className="custom-bad fw-bold fs-4">{item.score ? "결과보기" : "학습하기" }</span>
              </li>
            );
          })}
        </ol>
      </div>
    </QuizFormWrapper>
  );
};

export default QuizPageForm;
