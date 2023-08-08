import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { changeField, initializeForm, register } from "../../modules/auth";
import { check } from "../../modules/user";
import { useNavigate } from "react-router-dom";
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
        const {username,password, passwordConfirm} = form;
        if([username, password, passwordConfirm].includes('')) {
            setError('빈 칸을 모두 입력하세요.');
            return;
        }
        if(password !== passwordConfirm){
            setError('비밀번호가 일치하지 않습니다.');
            dispatch(changeField({ form: 'register', key:'password', value:''}));
            dispatch(
                changeField({form: 'register', key:'passwordConfirm', value:''}),
            );
            return;
        }
        dispatch(register({username,password}));
    }

    useEffect(() => {
        dispatch(initializeForm('register'));
    }, [dispatch]);
    
    useEffect(() => {
        if(authError) {
            if(authError.response.status ===409) {
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
            <div className="register-wrapper">
                <div className="idpw" onSubmit={onSubmit}>
                    <input className="input" autoComplete="username" name="username" placeholder="아이디" onChange={onChange} value={form.username} />
                    <input className="input" autoComplete="new-password" name="password" placeholder="비밀번호" type="password" onChange={onChange} value={form.password} />
                    <input className="input" autoComplete="new-passwordConfirm" name="password" placeholder="비밀번호 확인" type="passwordConfirm" onChange={onChange} value={form.passwordConfirm} />
                </div>
                {error && <div className="error-message">{error}</div>}
                <button>이전</button>
                <button>다음</button>
            </div>
        </>
    );
};

export default RegisterForm;