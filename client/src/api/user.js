import axios from 'axios';

const url = 'http://localhost:5000';
const API= axios.create({baseURL:url});
export const signUp = (user) => API.post(`/user/signup`, user);
export const signIn = (user) => API.post(`/user/signin`, user);


