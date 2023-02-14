import axios from 'axios';

const url = 'http://localhost:5000/user';
export const signUp = (user) => axios.post(`${url}/signup`, user);


