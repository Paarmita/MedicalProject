/* eslint-disable react/require-default-props */
/* eslint-disable react/prop-types */
import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import PropTypes from 'prop-types';
import { isAuthenticated } from '../Api';

const PrivateRoute = ({ component: Component, ...rest }) => (
	// props means components passed down to this private route component
	<Route
		{...rest}
		render={props =>
			isAuthenticated() ? (
				<Component {...props} />
			) : (
				<Redirect
					to={{
						pathname: '/signin',
						state: { from: props.location },
					}}
				/>
			)
		}
	/>
);

PrivateRoute.propTypes = {
	location: PropTypes.string,
	// component: PropTypes.component,
};

export default PrivateRoute;
