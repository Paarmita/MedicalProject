/* eslint-disable no-console */
export const signup = async user => {
	try {
		const response = await fetch(`${process.env.REACT_APP_API_URL}/signup`, {
			method: 'POST',
			headers: {
				Accept: 'application/json',
				'Content-Type': 'application/json',
			},
			body: JSON.stringify(user),
		});
		return response.json();
	} catch (err) {
		return console.log(err);
	}
};

export const signin = async user => {
	try {
		const response = await fetch(`${process.env.REACT_APP_API_URL}/signin`, {
			method: 'POST',
			headers: {
				Accept: 'application/json',
				'Content-Type': 'application/json',
			},
			body: JSON.stringify(user),
		});
		return response.json();
	} catch (err) {
		return console.log(err);
	}
};

export const authenticate = (jwt, next) => {
	// next is callback
	if (typeof window !== 'undefined') {
		localStorage.setItem('jwt', JSON.stringify(jwt)); // getItem is to grab the token
		next();
	}
};

export const setName = (name, next) => {
	if (typeof window !== 'undefined') {
		localStorage.setItem('username', JSON.stringify(name));
		next();
	}
};

export const signout = async next => {
	if (typeof window !== 'undefined') localStorage.removeItem('jwt'); // access localstorage and remove jwt
	next(); // callback function to redirect the user
	try {
		const response = await fetch(`${process.env.REACT_APP_API_URL}/signout`, {
			method: 'GET',
		});
		console.log('signout', response);
		return response.json();
	} catch (err) {
		return console.log(err);
	}
};

export const isAuthenticated = () => {
	if (typeof window === 'undefined') {
		return false;
	}

	if (localStorage.getItem('jwt')) {
		return JSON.parse(localStorage.getItem('jwt'));
	}
	return false;
};
