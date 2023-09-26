import { useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, Link } from "react-router-dom";
import { SchoolFetchThunk } from "../../store/schoolSlice";
import styled from "styled-components";

const SchoolWrapper = styled.div`
    .school-wrapper{
        width: 80%;
        margin: auto;
    }
    .schoolauth {
        width:50%;
        height: 100%;
        margin: 0 auto 5vh auto;
    }
    .schoolauth input {
        width:100%;
        border: 3px solid #9E9E9E;
        text-weight: 500;
        margin: .5vh;
    }
    .btn2 {
        display: flex;
        justify-content: center;
        gap: 1.8vw;
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

const SchoolAuth = ({ type, form, onChange, onSubmit }) => {
    const [error,setError] = useState(null);
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const [schoolRef, gradeRef, classnumRef, codeRef] = [useRef(), useRef(), useRef(), useRef()];
    const onClickHandler = (e) => {
        console.log("btnclicked");
        dispatch(SchoolFetchThunk(schoolRef.current.value, gradeRef.current.value, classnumRef.current.value, codeRef.current.value));
    }
	return (
        <>
            <SchoolWrapper>
                <div className="school-wrapper">
                    <div className="schoolauth">
                        <input ref={schoolRef} className="input" name="school" placeholder="학교" onChange={onChange} />
                        <input ref={gradeRef} className="input" name="grade" placeholder="학년" onChange={onChange} />
                        <input ref={classnumRef} className="input" name="classnum" placeholder="반" onChange={onChange} />
                        <input ref={codeRef} className="input"name="code" placeholder="학급코드" onChange={onChange} />
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
            </SchoolWrapper>
        </>
    );
}

export default SchoolAuth;