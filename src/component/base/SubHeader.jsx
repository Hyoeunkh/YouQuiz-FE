import styled from "styled-components";
const Sub = styled.div`
  width:60%;
  .sub-header {
    border-bottom: 2px solid #414141;
    padding: 0px 0px 15px 10px;
    .sub-title {
      font-weight: 600;
      font-size: 1.5rem;
    }
  }
`;

const SubHeader = ({ page }) => {
  return (
    <>
      <Sub>
        <div className="sub-header">
          <div className="sub-title">{page}</div>
        </div>
      </Sub>
    </>
  );
};

export default SubHeader;
