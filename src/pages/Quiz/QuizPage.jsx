import React from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import "bootstrap/dist/css/bootstrap.min.css";
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

export default function QuizPage() {
  const navigate = useNavigate();
  
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
              <div class="fw-bold">Subheading</div>
              Content for list item
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
