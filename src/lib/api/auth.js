import client from './client'

export const login = ({userid, password}) =>
    client.post('/api/auth/login', {userid, password});

export const register = ({userid, password, username, birth, sex, phoneNumber, school, grade, classnum, code}) =>
    client.post('/api/auth/register', {userid, password, username, birth, sex, phoneNumber, school, grade, classnum, code});

export const check = () => client.get('/api/auth/check');

export const logout = () => client.post('/api/auth/logout');
