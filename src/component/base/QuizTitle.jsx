import React from 'react';
import styled from "styled-components";

const Questionwrapper = styled.div`
  display: flex;
  width: 79vw;
  margin-left: 9vw; 
  justify-content: space-between;

 .problem {
  width: 70%;
  font-size:2.1rem;
  font-weight:600;
  margin: 1.8rem;
  margin-left:10vw;
  }
 .progressbar-container {
  display: flex;
  flex-direction: row;
  margin: 2.5rem 0px 0px 0px;
  position: relative;
  z-index: 1; 
  align-items:center;
  justify-content:center;
 }
  .progressbar {
    width: 15vw;
    height: 0.1vh;
    background-color: green;
    border: 2px solid green;
    position: absolute;
  }
  .circle {
    width: 0.5vw;
    height: 0.5vw;
    border-radius: 50%;
    background-color: white;
    border: 0.15vw solid green;
    margin: 0vw 1vw;
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
        <div className='problem'>{text}</div>
        <div className="progressbar-container">
          <div className="progressbar"></div>
            {[...Array(totalPageCount)].map((_, index) => (
              <div
                key={index}
                className={`circle ${index < currentPage ? 'filled' : ''}`}
              >
              </div>
            ))}
        </div>
      </Questionwrapper>
    </>
  );
}
export default Title;