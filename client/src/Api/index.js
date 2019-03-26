/* eslint-disable no-console */
import axios from 'axios';

const BASE_URL = 'http://localhost:4000';

async function getFoodJokesData() {
	const url = `${BASE_URL}/api/jokes/food`;
	try {
		const response = await axios.get(url);
		return response.data;
	} catch (err) {
		console.log('err', err);
		return err;
	}
}

async function getCelebrityJokesData() {
	if (sessionStorage.getItem('jwtToken')) {
		axios.defaults.headers.common['access-token'] = sessionStorage.getItem('jwtToken');
	}

	try {
		const response = await axios.get(`${BASE_URL}/api/jokes/celebrity`);
		console.log('response', response.data.length);
		return response.data;
	} catch (error) {
		console.log('error', error);
		return [];
	}
}

export { getFoodJokesData, getCelebrityJokesData };
