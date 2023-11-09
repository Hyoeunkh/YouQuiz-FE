import { useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, Link } from "react-router-dom";
import { RegisterFetchThunk } from "../store/registerSlice";
import styled from "styled-components";

const RegisterWrapper = styled.div`
    .register-wrapper{
        width: 80%;
        margin: auto;
    }
    .roletype{
        margin: 1vh 20vw;
        gap: 1vw;
        display: flex;
        flex-direction: row;
        font-size: 1.2rem;
    }
    .roletype label {
        font-size: 1rem;
        padding: 0.2em 0.4em;
    }
    .roletype input[type="radio"], label {
        vertical-align: middle;
    }
      
    .roletype input[type="radio"] {
        appearance: none;
        border: max(2px, 0.1em) solid gray;
        border-radius: 50%;
        width: 1.25em;
        height: 1.25em;
        transition: border 0.2s ease-in-out;
        margin-right: .3vw;
    }
    
    .roletype input[type="radio"]:checked {
        border: 0.4em solid #19A05E;
    }
    .roletype input[type=radio]:hover{
        box-shadow: 0 0 0 max(2px, 0.2em) lightgray;
        cursor: pointer;
    }
    .sex{
        display: flex;
        width:100%;
        border: 3px solid #9E9E9E;
        margin: .5vh;
        gap: 1.2vw;
        padding: .5vh 1.6vw;
        border-radius: .3rem;
        color: #828282;
        font-size: 1.1rem;
        text-align: center;
    }
    .sex input[type="radio"] {
        display: none;
    }

    .sex input[type=radio]+label{
        display: flex;
        flex-direction: column;
        cursor: pointer;
        height: 5vh;
        width: 6vw;
        text-align: center;
        justify-content: center;
        font-size: 1.1rem;
        border-radius: .2rem;
    }
    .sex input[type=radio]+label{
        background-color: #dedede;
        color: #747474;
}
    .sex input[type=radio]:checked+label{
        background-color: #747474;
        color: #dedede;
}
    .sex span {
    margin-right: 20vw;
}
    .userinfo {
        width:50%;
        height: 100%;
        margin: 0 auto 5vh auto;
    }
    .userinfo input {
        width:100%;
        border: 3px solid #9E9E9E;
        text-weight: 500;
        margin: .5vh;
    }
    .btn2 {
        display: flex;
        justify-content: center;
        gap: 1.5vw;
    }
    
    .btn2 .back {
        background: #858585;
    }
    .btn2 a {
        width: 24%;
        height: 7vh;
    }
    .btn2 button {
        width: 100%;
        height: 100%;
        background: #19A05E;
        border-radius: .2rem;
        color: white;

        font-weight: 400;
        font-size: 30px;
    }
`;
const RegisterForm = ({ type, form, onChange, onSubmit }) => {
    const [error,setError] = useState(null);
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const [idRef, pwRef, pwconfirmRef, nameRef, birthRef, phoneRef] = [useRef(), useRef(), useRef(), useRef(),useRef(), useRef()];
    const [btnActive, setBtnActive] = useState('student');
    const [sexActive, setSexActive] = useState('male');
    const onClickHandler = (e) => {
        console.log("btnclicked");
        console.log(btnActive);
        console.log(sexActive);
        dispatch(RegisterFetchThunk(btnActive, idRef.current.value, pwRef.current.value, nameRef.current.value, birthRef.current.value, sexActive, phoneRef.current.value));
    }

    return (
        <>
        <RegisterWrapper>
            <div className="register-wrapper">
                <div className="roletype">
                    <label>
                    <input
                        name="role" 
                        type="radio"
                        onChange={()=>setBtnActive("student")} checked 
                        />
                    학생 가입</label>
                    <label>
                    <input 
                        name="role" 
                        type="radio" 
                        onChange={()=>setBtnActive("teacher")} 
                        />
                    교직원 가입</label>
                </div>
                <div className="userinfo" onSubmit={onSubmit}>
                    <input ref={idRef} className="input"  name="userid" placeholder="아이디" onChange={onChange}  />
                    <input ref={pwRef} className="input"  name="password" placeholder="비밀번호" type="password" onChange={onChange}  />
                    <input ref={pwconfirmRef} className="input"  name="passwordonfirm" placeholder="비밀번호확인" type="password" onChange={onChange}  />
                    <input ref={nameRef} className="input" name="username" placeholder="이름" onChange={onChange} />
                    <input ref={birthRef} className="input" name="bitrh" placeholder="생년월일 8자리" onChange={onChange} />
                    <div className="sex">
                        <span>성별</span>
                        <input id="male" name="sex" value="male" type="radio" onChange={()=>setSexActive("male")} />
                        <label htmlFor="male">남자</label>
                        <input id="female" name="sex" value="female" type="radio" onChange={()=>setSexActive("female")} />
                        <label htmlFor="female">여자</label>
                    </div>
                    <input ref={phoneRef} className="input" name="phoneNumber" placeholder="휴대전화번호" type="tel" onChange={onChange}/>
                </div>
                    {error && <div className="error-message">{error}</div>}
                    <div className="btn2">
                        <Link to={-1}>
                            <button className="back">이전</button>
                        </Link>
                        <Link to={`/login`}>
                            <button onClick={onClickHandler}>다음</button>
                        </Link>
                    </div>
                </div>
            </RegisterWrapper>
        </>
    );
};

export default RegisterForm;