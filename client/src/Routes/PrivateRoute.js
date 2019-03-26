import React from 'react';
import { Redirect, Route } from 'react-router-dom';

class PrivateRoute extends React.Component {
	render() {
		const Component = this.props.component;
		return (
			<Route
				render={_props =>
					localStorage.getItem('authenticated') ? (
						<Component {...this.props} />
					) : (
						<Redirect to="/signin" />
					)
				}
			/>
		);
	}
}

export default PrivateRoute;
