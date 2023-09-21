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
    .idpw {
        width:50%;
        height: 100%;
        margin: 5vh auto;
    }
    input {
        width:100%;
        border: 3px solid #9E9E9E;
        text-weight: 500;
    }
    .btn2 {
        display: flex;
        justify-content: center;
        gap: 1.8vw;
    }
    .btn2 a {
        width: 24%;
        height: 7vh;
    }
    button {
        width: 100%;
        height: 100%;
        background: #19A05E;
        border-radius: .2rem;
        color: white;

        font-weight: 400;
        font-size: 30px;
    }
    .back {
        background: #828282;
    }
`;
const RegisterForm = ({ type, form, onChange, onSubmit }) => {
    const [error,setError] = useState(null);
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const [idRef, pwRef] = [useRef(), useRef()];
    const [btnActive, setBtnActive] = useState('student');

    const onClickHandler = (e) => {
        console.log("btnclicked");
        console.log(btnActive);
        dispatch(RegisterFetchThunk(btnActive, idRef.current.value, pwRef.current.value));
    }

    return (
        <>
        <RegisterWrapper>
            <div className="register-wrapper">
                {/*}
            <div className="userinfo" onSubmit={onSubmit}>
                <input ref={idRef} className="input"  name="userid" placeholder="아이디" onChange={onChange}  />
                <input ref={pwRef} className="input"  name="password" placeholder="비밀번호" type="password" onChange={onChange}  />
                <input ref={pwRef} className="input"  name="passwordonfirm" placeholder="비밀번호확인" type="passwordconfirm" onChange={onChange}  />
                <input className="input" autoComplete="new-username" name="username" placeholder="이름" type="username" onChange={onChange} value={form.username} />
                <input className="input" autoComplete="new-bitrh" name="bitrh" placeholder="생년월일 8자리" type="bitrh" onChange={onChange} value={form.bitrh} />
                <input className="input" autoComplete="new-sex" name="sex" placeholder="성별" type="sex" onChange={onChange} value={form.sex} />
                <input className="input" autoComplete="new-phoneNumber" name="phoneNumber" placeholder="휴대전화번호" type="phoneNumber" onChange={onChange} value={form.phoneNumber} />
            </div>
    */}
                {error && <div className="error-message">{error}</div>}
                <div className="btn2">
                    <Link to={-1}>
                        <button className="back">이전</button>
                    </Link>
                    <Link to={`/register/schoolAuth`}>
                        <button onClick={onClickHandler}>다음</button>
                    </Link>
                </div>
            </div>
        </RegisterWrapper>
        </>
    );
};

export default RegisterForm;