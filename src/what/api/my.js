import axios from 'axios';

export const student_list = () => axios.get(`http://101.101.219.109:8080//teacher/1/studystatus`);