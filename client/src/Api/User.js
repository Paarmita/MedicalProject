/* eslint-disable no-console */
export const read = async (userId, token) => {
	try {
		const response = await fetch(`${process.env.REACT_APP_API_URL}/user/${userId}`, {
			method: 'GET',
			headers: {
				Accept: 'application/json',
				'Content-Type': 'application/json',
				Authorization: `Bearer ${token}`,
			},
		});
		return response.json();
	} catch (err) {
		return console.log(err);
	}
};

export const update = (userId, token, user) => {
	return fetch(`${process.env.REACT_APP_API_URL}/user/${userId}`, {
		method: 'PUT',
		headers: {
			Accept: 'application/json',
			'Content-Type': 'application/json',
			Authorization: `Bearer ${token}`,
		},
		body: JSON.stringify(user),
	})
		.then(response => {
			return response.json();
		})
		.catch(err => console.log(err));
};

export const remove = async (userId, token) => {
	try {
		const response = await fetch(`${process.env.REACT_APP_API_URL}/user/${userId}`, {
			method: 'DELETE',
			headers: {
				Accept: 'application/json',
				'Content-Type': 'application/json',
				Authorization: `Bearer ${token}`,
			},
		});
		return response.json();
	} catch (err) {
		return console.log(err);
	}
};

export const list = async () => {
	try {
		const response = await fetch(`${process.env.REACT_APP_API_URL}/users`, {
			method: 'GET',
		});
		return response.json();
	} catch (err) {
		return console.log(err);
	}
};
