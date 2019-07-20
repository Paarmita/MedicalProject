/* eslint-disable no-console */
export const create = async (userId, token, post) => {
	try {
		const response = await fetch(`${process.env.REACT_APP_API_URL}/api/post/new/${userId}`, {
			method: 'POST',
			headers: {
				Accept: 'application/json',
				Authorization: `Bearer ${token}`,
			},
			body: post,
		});
		return response.json();
	} catch (err) {
		return console.log(err);
	}
};

export const list = async () => {
	try {
		const response = await fetch(`${process.env.REACT_APP_API_URL}/api/posts`, {
			method: 'GET',
		});
		return response.json();
	} catch (err) {
		return console.log(err);
	}
};

export const singlePost = postId => {
	return fetch(`${process.env.REACT_APP_API_URL}/api/post/${postId}`, {
		method: 'GET',
	})
		.then(response => {
			return response.json();
		})
		.catch(err => console.log(err));
};

export const listByUser = async (userId, token) => {
	try {
		const response = await fetch(`${process.env.REACT_APP_API_URL}/api/posts/by/${userId}`, {
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
