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

const SubHeader = ({ page, title }) => {
  return (
    <>
      <Sub>
        <div className="sub-header">
          <div className="sub-title">{page}</div>
          { title && (
            <div className="sub-class">{`${title.school_name}고 ${title.grade}학년 ${title.class_num}반`}</div>
          )}
        </div>
      </Sub>
    </>
  );
};

export default SubHeader;
