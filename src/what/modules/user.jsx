import { createAction , handleActions } from 'redux-actions';
import { takeLatest, call } from 'redux-saga/effects';
import * as authAPI from '../api/auth';
import createRequestSaga, {createRequestActionTypes,} from '../createRequestSaga';

const TEMP_SET_USER = 'user/TEMP_SET_USER'; 
const [ CHECK, CHECK_SUCCESS, CHECK_FAILURE] = createRequestActionTypes(
    'user/CHECK',
);
const SET_USER_INFO = 'user/SET_USER_INFO';  // 추가
const LOGOUT= 'user/LOGOUT';

export const tempSetUser = createAction (TEMP_SET_USER , user => user);
export const check = createAction(CHECK);
export const logout = createAction(LOGOUT);
export const setUserInfo = createAction(SET_USER_INFO, ({ userType, user_id }) => ({ userType, user_id }));  // 추가

const checkSaga = createRequestSaga( CHECK , authAPI.check );

//로그인정보만기시 초기화
function checkFailureSaga() {
    try{
        localStorage.removeItem('user');
    }
    catch(e) {
        console.log('localStorage is not working');
    }
}

function* logoutSaga() {
    try{
        yield call(authAPI.logout);
        localStorage.removeItem('user');
    }catch(e){
        console.log(e);
    }
}
export function* userSaga() {
    yield takeLatest(CHECK , checkSaga);
    yield takeLatest(CHECK_FAILURE, checkFailureSaga);
    yield takeLatest(LOGOUT,logoutSaga);
}



const initialState = {
    user: null,
    checkError: null,
    userType: '', // 추가
    user_id: '', // 추가
};

export default handleActions(
    {
        [TEMP_SET_USER] : (state, { payload : user }) => ({
            ...state,
            user,
        }),
        [CHECK_SUCCESS] : (state, { payload : user } ) => ({
            ...state ,
            user,
            checkError : null,
        }),
        [CHECK_FAILURE] : (state, { payload : error }) => ({
            ...state,
            user: null,
            checkError : error,
        }),
        [LOGOUT]:state => ({
            ...state,
            user:null,
        }),
        [SET_USER_INFO]: (state, { payload: { userType, user_id } }) => ({
            ...state,
            userType,
            user_id,
          }),
    },
    initialState,
);