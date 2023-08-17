
import "../../style/AgreementPage.scss";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

const AgreementPage = () => {
    const [allChecked, setAllChecked] = useState(false);
    const [checkbox1Checked, setCheckbox1Checked] = useState(false);
    const [checkbox2Checked, setCheckbox2Checked] = useState(false);
    const [checkbox3Checked, setCheckbox3Checked] = useState(false);
    const navigate = useNavigate();
    const [errorMessage, setErrorMessage] = useState("");
    const userType = "student";// 이거 어떻게?

    useEffect(() => {
    // 두 번째와 세 번째 체크박스가 모두 체크되었을 때, 첫 번째 체크박스를 체크상태로
      setCheckbox1Checked(checkbox2Checked && checkbox3Checked);
      setAllChecked(checkbox1Checked && checkbox2Checked && checkbox3Checked);
    }, [checkbox1Checked, checkbox2Checked, checkbox3Checked]);

  const handleCheckAll = (e) => {
    const checked = e.target.checked;
    setAllChecked(checked);
    setCheckbox1Checked(checked);
    setCheckbox2Checked(checked);
    setCheckbox3Checked(checked);
  };

  const handleCheckbox2Change = (e) => {
    setCheckbox2Checked(e.target.checked);
  };

  const handleCheckbox3Change = (e) => {
    setCheckbox3Checked(e.target.checked);
  };

  const handleNextPage = () => {
    if (allChecked) {
        navigate(`/register/${userType}`);
    } else {
      setErrorMessage("필수 항목에 동의해주세요.");
    }
  };

  return (
    <>
          <div className="agree-wrapper">
            <div className="agreement">
              <label id="label">
                <input id="hiddenCheckbox" type="checkbox"
                    onChange={handleCheckAll}
                    checked={checkbox1Checked} />
                <div id="showCheckbox"></div>
                <span>전체 동의하기<br />
                <p>이용약관, 개인정보 수집 및 이용에 모두 동의합니다.</p></span>
              </label>
              <label id="label">
                <input id="hiddenCheckbox" type="checkbox"
                    onChange={handleCheckbox2Change}
                    checked={checkbox2Checked} />
                <div id="showCheckbox"></div>
                <span>[필수] 유퀴즈 이용약관</span>
              </label>
              <label id="label">
              <input id="hiddenCheckbox" type="checkbox"
                  onChange={handleCheckbox3Change}
                  checked={checkbox3Checked} />
              <div id="showCheckbox"></div>
              <span>[필수] 개인정보 수집 및 이용</span>
            </label>
            </div>
            {errorMessage && ( // 오류 메시지가 있을 경우에만 빨간색으로 표시
              <div className="error-message" style={{ color: "red" }}>
                {errorMessage}
              </div>
            )}
            <button onClick={handleNextPage}>다음</button>
          </div>
    </>
  );
};

export default AgreementPage;