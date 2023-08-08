import React from 'react';
import styled from "styled-components";

const Problem = styled.div`
  font-size:2.1rem;
  font-weight:600;
  margin: 1.8rem;
  margin-left:20vw;
`;
const Title = ({ text }) => {
  return <Problem>{text}</Problem>;
};

export default Title;