import styled from "styled-components";
const Sub = styled.div`
  height: 10vh;
  float:top;
  
  .sub-header {
    display: flex;
    justify-content: space-between;
    width: 55%;
    height: 100%;
    align-items: end;
    padding-bottom: 2vh;
    border-bottom: 2px solid #414141;
  }
  .sub-title {
    font-weight: 700;
    font-size: 1.8rem;
  }
`;

const SubHeader = ({ page, school, grade, classnum }) => {
  return (
    <>
      <Sub>
        <div className="sub-header">
          <div className="sub-title">{page}</div>
          <div className="sub-class">{`${school}고 ${grade}학년 ${classnum}반`}</div>
        </div>
      </Sub>
    </>
  );
};

export default SubHeader;
