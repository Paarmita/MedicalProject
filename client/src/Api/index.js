export const signup = user => {
	return fetch(`https://medical-umbrella.herokuapp.com/api/signup`, {
		method: 'POST',
		headers: {
			Accept: 'application/json',
			'Content-Type': 'application/json',
		},
		body: JSON.stringify(user),
	})
		.then(response => {
			return response.json();
		})
		.catch(err => console.log(err));
};

export const signin = user => {
	return fetch(`https://medical-umbrella.herokuapp.com/api/signin`, {
		method: 'POST',
		headers: {
			Accept: 'application/json',
			'Content-Type': 'application/json',
		},
		body: JSON.stringify(user),
	})
		.then(response => {
			return response.json();
		})
		.catch(err => console.log(err));
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

export const signout = next => {
	if (typeof window !== 'undefined') localStorage.removeItem('jwt');
	next();
	return fetch(`https://medical-umbrella.herokuapp.com/api/signout`, {
		method: 'GET',
	})
		.then(response => {
			// console.log('signout', response);
			return response.json();
		})
		.catch(err => console.log(err));
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
