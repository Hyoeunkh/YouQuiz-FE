import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
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
const RegisterForm = () => {
    const [error,setError] = useState(null);
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const {form, auth, authError, user} = useSelector(({auth, user}) => ({
        form: auth.register,
        auth: auth.auth,
        authError: auth.authError,
        user: user.user
    }));

    useEffect(() => {
        if(user) {
            navigate('/');
            try {
                localStorage.setItem('user', JSON.stringify(user));
            }catch (e){
                console.log('localStorage is not working');
            }
        }
    }, [navigate, user]);
    return (
        <>
        <RegisterWrapper>
            <div className="register-wrapper">
                {error && <div className="error-message">{error}</div>}
                <div className="btn2">
                    <Link to={-1}>
                        <button className="back">이전</button>
                    </Link>
                    <Link to={`/register/schoolAuth`}>
                        <button>다음</button>
                    </Link>
                </div>
            </div>
        </RegisterWrapper>
        </>
    );
};

export default RegisterForm;