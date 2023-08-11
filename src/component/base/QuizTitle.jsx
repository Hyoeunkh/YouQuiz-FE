import React from 'react';
import styled from "styled-components";

const Questionwrapper = styled.div`
  display: flex;
  flex-direction: row;
  width: 75vw;
  justify-content:space-between;
`;

const Problem = styled.div`
  width: 70%;
  font-size:2.1rem;
  font-weight:600;
  margin: 1.8rem;
  margin-left:10vw;
`;
const Progressbar = styled.div`
  display: flex;
  flex-direction: row;
  margin: 3.8rem 0px 0px 0px;
  position: relative;
  z-index: 1; 
  align-items:center;
  justify-content:center;

  .progressbar {
    width: 19vw;
    height: 0.1vh;
    background-color: green;
    border: 2px solid green;
    position: absolute;
  }
  .circle {
    width: 0.6vw;
    height: 0.6vw;
    border-radius: 50%;
    background-color: white;
    border: 0.15vw solid green;
    margin: 0vw 2vw;
    position: relative;
    z-index: 2;
  }
  
  .filled {
    background-color: green;
  }
  
`;

const Title = ({ text, currentPage, totalPageCount }) => {
  return (
    <>
      <Questionwrapper>
        <Problem>{text}</Problem>
        <Progressbar>
          <div className="progressbar"></div>
            {[...Array(totalPageCount)].map((_, index) => (
              <div
                key={index}
                className={`circle ${index < currentPage ? 'filled' : ''}`}
              >
              </div>
            ))}
        </Progressbar>
      </Questionwrapper>
    </>
  );
}
export default Title;