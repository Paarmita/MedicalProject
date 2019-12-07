/* eslint-disable prefer-destructuring */
import React, { Component } from 'react';
import './style.css';
import DeleteUser from '../Users/deleteUser';
import Tabs from './Tabs';
import { isAuthenticated } from '../../Api';
import { read } from '../../Api/User';

class Settings extends Component {
	constructor() {
		super();
		this.state = {
			user: '',
		};
	}

	componentDidMount() {
		const userId = this.props.match.params.userId;
		this.init(userId);
	}

	componentWillReceiveProps(props) {
		const userId = props.match.params.userId;
		this.init(userId);
	}

	init = userId => {
		const token = isAuthenticated().token;
		read(userId, token).then(data => {
			if (data.error) {
				console.log(data.error);
			} else {
				this.setState({ user: data });
			}
		});
	};

	render() {
		const { user } = this.state;
		return (
			<div>
				<div className="container">
					<h2 className="my-5">Settings</h2>
					
						<Tabs>
							Profile
							<span>
								<form>
									<DeleteUser userId={user._id} />
								</form>
							</span>
							Privacy
							<span>Privacy</span>
							Notifications
							<span>Notifications</span>
						</Tabs>
				</div>
			</div>
		);
	}
}
export default Settings;
