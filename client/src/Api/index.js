

import axios from 'axios';
import * as t from './Constants';

if(sessionStorage.getItem('jwtToken')){
    axios.defaults.headers.common['access-token'] = sessionStorage.getItem('jwtToken');
}

export function signUp(email, password){
	return axios.post(t.SIGN_UP, { username: username, email: email, password: password})
}

export function signIn(email, password){
	return axios.post(t.SIGN_IN, { email: email, password: password})
}

