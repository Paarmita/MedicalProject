export const create = async (userId, token, post) => {
	try {
		const response = await fetch(
			`https://medical-umbrella.herokuapp.com/api/post/new/${userId}`,
			{
				method: 'POST',
				headers: {
					Accept: 'application/json',
					Authorization: `Bearer ${token}`,
				},
				body: post,
			},
		);
		return response.json();
	} catch (err) {
		return console.log(err);
	}
};

// export const list = async () => {
// 	try {
// 		const response = await fetch(`${process.env.REACT_APP_API_URL}/api/posts`, {
// 			method: 'GET',
// 		});
// 		return response.json();
// 	} catch (err) {
// 		return console.log(err);
// 	}
// };

// with pagination
export const list = page => {
	return fetch(`https://medical-umbrella.herokuapp.com/api/posts/?page=${page}`, {
		method: 'GET',
	})
		.then(response => {
			return response.json();
		})
		.catch(err => console.log(err));
};

export const singlePost = postId => {
	return fetch(`https://medical-umbrella.herokuapp.com/api/post/${postId}`, {
		method: 'GET',
	})
		.then(response => {
			return response.json();
		})
		.catch(err => console.log(err));
};

export const listByUser = async (userId, token) => {
	try {
		const response = await fetch(
			`https://medical-umbrella.herokuapp.com/api/posts/by/${userId}`,
			{
				method: 'GET',
				headers: {
					Accept: 'application/json',
					'Content-Type': 'application/json',
					Authorization: `Bearer ${token}`,
				},
			},
		);
		return response.json();
	} catch (err) {
		return console.log(err);
	}
};

export const remove = (postId, token) => {
	return fetch(`https://medical-umbrella.herokuapp.com/api/post/${postId}`, {
		method: 'DELETE',
		headers: {
			Accept: 'application/json',
			'Content-Type': 'application/json',
			Authorization: `Bearer ${token}`,
		},
	})
		.then(response => {
			return response.json();
		})
		.catch(err => console.log(err));
};

export const update = (postId, token, post) => {
	console.log(postId, token, post);
	return fetch(`https://medical-umbrella.herokuapp.com/api/post/${postId}`, {
		method: 'PUT',
		headers: {
			Accept: 'application/json',
			Authorization: `Bearer ${token}`,
		},
		body: post,
	})
		.then(response => {
			return response.json();
		})
		.catch(err => console.log(err));
};

export const like = (userId, token, postId) => {
	return fetch(`https://medical-umbrella.herokuapp.com/post/like`, {
		method: 'PUT',
		headers: {
			Accept: 'application/json',
			'Content-Type': 'application/json',
			Authorization: `Bearer ${token}`,
		},
		body: JSON.stringify({ userId, postId }),
	})
		.then(response => {
			return response.json();
		})
		.catch(err => console.log(err));
};

export const unlike = (userId, token, postId) => {
	return fetch(`https://medical-umbrella.herokuapp.com/post/unlike`, {
		method: 'PUT',
		headers: {
			Accept: 'application/json',
			'Content-Type': 'application/json',
			Authorization: `Bearer ${token}`,
		},
		body: JSON.stringify({ userId, postId }),
	})
		.then(response => {
			return response.json();
		})
		.catch(err => console.log(err));
};
