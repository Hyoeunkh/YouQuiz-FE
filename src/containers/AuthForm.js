import "../style/AuthForm.scss"
import { Link, useNavigate } from "react-router-dom";
import { useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { AuthFetchThunk } from "../store/authSlice";


const AuthForm = ({ type, form, onChange, onSubmit, error }) => {
    const btnRef= useRef();
    const navigate = useNavigate();
    const dispatch = useDispatch();

    const LS_KEY_ID = "LS_KEY_ID";
    const LS_KEY_SAVE_ID_FLAG = "LS_KEY_SAVE_ID_FLAG";

    const { status, id, username, role }= useSelector((state)=>state.auth);

    const [loginID, setLoginID] = useState("");
    const [btnActive, setBtnActive] = useState('student');
    const [idRef, pwRef] = [useRef(), useRef()];
    const [saveIDFlag, setSaveIDFlag] = useState(false);

    const onClickHandler = (e) => {
            console.log(btnActive);
            dispatch(AuthFetchThunk(btnActive, idRef.current.value, pwRef.current.value));
            
            if (idRef.current.value === "") {
                alert("아이디를 입력해주세요.");
            }
            if (pwRef.current.value === "") {
                alert("비밀번호를 입력해주세요.");
            }
            
            if (true) {  /* login success */
                if (saveIDFlag) localStorage.setItem(LS_KEY_ID, loginID);
            } 
    }
    const getLoginID = (event) => {
        let value = event.target.value;
    
        if (value === "") {
          setLoginID(value);
          return;
        }
        setLoginID(value);
        return;
      };

    useEffect(() => {
        let idFlag = JSON.parse(localStorage.getItem(LS_KEY_SAVE_ID_FLAG));
        if (idFlag !== null) setSaveIDFlag(idFlag);
        if (idFlag === false) localStorage.setItem(LS_KEY_ID, "");
      
        let data = localStorage.getItem(LS_KEY_ID);
        if (data !== null) setLoginID(data);
      }, []);

    useEffect(() => {
        if(role === "student") navigate("/study");
        else if (role === "teacher") navigate("/teacher/study");
    }, [role])
    
    const handleSaveIDFlag = () => {
        localStorage.setItem(LS_KEY_SAVE_ID_FLAG, !saveIDFlag);
        setSaveIDFlag(!saveIDFlag);
      };
    return (
        <>
            <div className="auth-wrapper">
                <div className="welcome">
                    <h3>You Quiz</h3><span>방문을 환영합니다.</span>
                </div>
                <div className="usertype">
                    <button className={`student ${btnActive === "student" ? "active" : ""}`} onClick={()=>setBtnActive("student")}>학생</button>
                    <button className={`teacher ${btnActive === "teacher" ? "active" : ""}`} onClick={()=>setBtnActive("teacher")}>교직원</button>
                </div>
                
                <form className="idpw" onSubmit={onSubmit}>
                    <input ref={idRef} className="input"  name="userid" placeholder="아이디" value={loginID} onChange={(e) => getLoginID(e)} />
                    <input ref={pwRef} className="input"  name="password" placeholder="비밀번호" type="password"/>
                </form>
                <label className="store">
                    <input type="checkbox" id="store" onChange={handleSaveIDFlag}/>
                    <label htmlFor="store"></label>
                    아이디 저장
                </label>
                    {error && <div className="error-message">{error}</div>}
                    <button className="login" onClick={onClickHandler}>로그인</button>
                    test용 학생 아이디 : st1, 비밀번호 : 1000<br/>
                    test용 선생 아이디 : test1, 비밀번호 : 1000
                <ul className="bottom">
                        <li>
                            <Link to ="#">아이디 찾기</Link>
                        </li>
                        <li>
                            <Link to ="#">비밀번호 찾기</Link>
                        </li>
                        <li className="last">
                            <Link to ="/register">회원가입</Link>
                        </li>
                </ul>
            </div>
        </>
    );
};

export default AuthForm;