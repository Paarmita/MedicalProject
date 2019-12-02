export const read = async (userId, token) => {
	try {
		const response = await fetch(`https://medical-umbrella.herokuapp.com/api/user/${userId}`, {
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

export const update = async (userId, token, user) => {
	// console.log('USER DATA UPDATE:', user);
	try {
		const response = await fetch(`https://medical-umbrella.herokuapp.com/api/user/${userId}`, {
			method: 'PUT',
			headers: {
				Accept: 'application/json',
				// 'Content-Type': 'application/json',      removed bz we are not sending the form data, we're sending a file data
				Authorization: `Bearer ${token}`,
			},
			// body: JSON.stringify(user),
			body: user,
		});
		return response.json();
	} catch (err) {
		return console.log(err);
	}
};

export const remove = async (userId, token) => {
	try {
		const response = await fetch(`https://medical-umbrella.herokuapp.com/api/user/${userId}`, {
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
		const response = await fetch(`https://medical-umbrella.herokuapp.com/api/users`, {
			method: 'GET',
		});
		return response.json();
	} catch (err) {
		return console.log(err);
	}
};

//  update user name in navbar when edited
export const updateUser = (user, next) => {
	if (typeof window !== 'undefined') {
		if (localStorage.getItem('jwt')) {
			const auth = JSON.parse(localStorage.getItem('jwt'));
			auth.user = user;
			localStorage.setItem('jwt', JSON.stringify(auth));
			next();
		}
	}
};

export const follow = async (userId, token, followId) => {
	try {
		const response = await fetch(`https://medical-umbrella.herokuapp.com/api/user/follow`, {
			method: 'PUT',
			headers: {
				Accept: 'application/json',
				'Content-Type': 'application/json',
				Authorization: `Bearer ${token}`,
			},
			body: JSON.stringify({ userId, followId }),
		});
		return response.json();
	} catch (err) {
		return console.log(err);
	}
};

export const unfollow = (userId, token, unfollowId) => {
	return fetch(`https://medical-umbrella.herokuapp.com/api/user/unfollow`, {
		method: 'PUT',
		headers: {
			Accept: 'application/json',
			'Content-Type': 'application/json',
			Authorization: `Bearer ${token}`,
		},
		body: JSON.stringify({ userId, unfollowId }),
	})
		.then(response => {
			return response.json();
		})
		.catch(err => console.log(err));
};

export const findPeople = (userId, token) => {
	return fetch(`https://medical-umbrella.herokuapp.com/api/user/findpeople/${userId}`, {
		method: 'GET',
		headers: {
			Accept: 'application/json',
			'Content-Type': 'application/json',
			Authorization: `Bearer ${token}`,
		},
	})
		.then(response => {
			return response.json;
		})
		.catch(err => console.log(err));
};
