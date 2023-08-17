import client from './client'

export const login = ({userid, password}) =>{
    console.log('Sending login request:', userid, password);
    return client.post('http://101.101.219.109:8080/login/student', {userid, password})
        .then(response => {
            console.log('Login response:', response.data); // 응답 데이터 확인
            return response;
        });
}
export const register = ({userid, password, username, birth, sex, phoneNumber, school, grade, classnum, code}) => {
    console.log('Sending register request:', userid, username); // 요청 데이터 확인
    return client.post('http://101.101.219.109:8080/register/student', {userid, password, username, birth, sex, phoneNumber, school, grade, classnum, code})
        .then(response => {
            console.log('Register response:', response.data); // 응답 데이터 확인
            return response;
        });
};

export const check = () => client.get('http://101.101.219.109:8080/auth/check');

export const logout = () => client.post('http://101.101.219.109:8080/auth/logout');
