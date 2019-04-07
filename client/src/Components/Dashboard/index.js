/* eslint-disable jsx-a11y/accessible-emoji */
/* eslint-disable react/prefer-stateless-function */
import React from 'react';
import DashboardHeader from '../DashboardNavbar/DashboardHeader';

class Dashboard extends React.Component {
	render() {
		return (
			<div>
				<DashboardHeader />
				<div className="container marginTop main">
					<h4>Welcome to Dashboard 👋</h4>
					<p>Website Under Maintenance !! 🚀</p>
				</div>
			</div>
		);
	}
}

export default Dashboard;
