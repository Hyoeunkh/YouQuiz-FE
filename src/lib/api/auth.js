import client from './client'

export const login = ({userid, password}) =>
    client.post('http://101.101.219.109/login/student', {userid, password});

export const register = ({userid, password, username, birth, sex, phoneNumber, school, grade, classnum, code}) =>
    client.post('http://101.101.219.109/register/student', {userid, password, username, birth, sex, phoneNumber, school, grade, classnum, code});

//export const check = () => client.get('http://101.101.219.109/auth/check');

//export const logout = () => client.post('http://101.101.219.109/auth/logout');
