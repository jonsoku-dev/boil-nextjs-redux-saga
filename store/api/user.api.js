import axios from 'axios';

export const signUpAPI = () => axios.get('/user/signup');
export const logInAPI = () => axios.get('/user/login');
export const logOutAPI = () => axios.get('/user/logout');
export const loadMeAPI = () => axios.get('/user/loadMe');
export const loadUserAPI = () => axios.get('/user/loadUser');
