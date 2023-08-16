import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { changeField, initializeForm, register } from "../../modules/auth";
import { check } from "../../modules/user";
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
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const {form, auth, authError, user} = useSelector(({auth, user}) => ({
        form: auth.register,
        auth: auth.auth,
        authError: auth.authError,
        user: user.user
    }));

    const onChange = e => {
        const {value, name} = e.target;
        dispatch(
            changeField({
                form:'register',
                key:name,
                value
            })
        );
    };

    const onSubmit = e => {
        e.preventDefalut();
        const { school, grade, classnum, code } = form;
        if([school, grade, classnum, code].includes('')) {
            setError('빈 칸을 모두 입력하세요.');
            return;
        }
        
    }

    useEffect(() => {
        dispatch(initializeForm('register'));
    }, [dispatch]);
    
    useEffect(() => {
        if(authError) {
            if(authError.response.status === 409) {
                setError('이미 존재하는 계정명입니다.');
                return;
            }
            setError('회원가입 실패');
            return;
        }
        if(auth) {
            console.log('회원가입 성공');
            console.log(auth);
            dispatch(check());
        }
    },[auth, authError, dispatch]);
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
                    <div className="idpw" onSubmit={onSubmit}>
                        <input className="input" autoComplete="new-school" name="school" placeholder="학교" onChange={onChange} value={form.school} />
                        <input className="input" autoComplete="new-grade" name="grade" placeholder="학년" type="grade" onChange={onChange} value={form.grade} />
                        <input className="input" autoComplete="new-classnum" name="classnum" placeholder="반" type="classnum" onChange={onChange} value={form.classnum} />
                        <input className="input" autoComplete="new-code" name="code" placeholder="학급코드" type="code" onChange={onChange} value={form.code} />
                    </div>
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