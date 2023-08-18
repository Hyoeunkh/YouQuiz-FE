import { useEffect, useState } from "react";
import { useNavigate, Link } from "react-router-dom";
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

const SchoolAuth = () => {
    const [error,setError] = useState(null);



	return (
        <>
            <RegisterWrapper>
                <div className="register-wrapper">
                    {/*<div className="idpw" onSubmit={onSubmit}>
                        <input className="input" autoComplete="new-school" name="school" placeholder="학교" onChange={onChange} value={form.school} />
                        <input className="input" autoComplete="new-grade" name="grade" placeholder="학년" type="grade" onChange={onChange} value={form.grade} />
                        <input className="input" autoComplete="new-classnum" name="classnum" placeholder="반" type="classnum" onChange={onChange} value={form.classnum} />
                        <input className="input" autoComplete="new-code" name="code" placeholder="학급코드" type="code" onChange={onChange} value={form.code} />
    </div>*/}
                    {error && <div className="error-message">{error}</div>}
                    <div className="btn2">
                        <Link to={-1}>
                            <button className="back">이전</button>
                        </Link>
                        <Link to={`/login`}>
                            <button>다음</button>
                        </Link>
                    </div>
                </div>
            </RegisterWrapper>
            
        </>
    );
}

export default SchoolAuth;